const vehicleGuideComponentServices = require("../../services/vehicleGuideComponentServices/vehicleGuideComponentServices");
const globalFunctions = require("../../utils/globalFunctions");

const createVehicleGuide = async (req, res) => {
  try {
    const { page, paragraph, vehicleType } = req.body;

    const documents = [];
    const processedCards = vehicleType.map((card, index) => {
      const imageFilename = globalFunctions.generateUniqueFilename(
        card.image_extension,
        `CardImage_${index}`
      );

      documents.push({
        base64String: card.image_base64,
        name: imageFilename,
      });

      return {
        ...card,
        image: imageFilename,
      };
    });

    const offerServiceData = {
      page,
      paragraph,
      vehicleType: processedCards,
    };

    const newVehicleGuide =
      await vehicleGuideComponentServices.createVehicleGuide(
        offerServiceData,
        documents
      );

    res.status(201).json(newVehicleGuide);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateVehicleGuide = async (req, res) => {
  try {
    const vehicleGuideId = req.params.id;
    const { page, paragraph, vehicleType } = req.body;
    const existingVehicleGuide =
      await vehicleGuideComponentServices.getVehicleGuideById(vehicleGuideId);

    if (!existingVehicleGuide) {
      return res.status(404).send("Vehicle Guide not found");
    }

    let documents = [];
    const processedVehicleTypes = existingVehicleGuide.vehicleType.map(
      (existingType) => {
        const updatedType = vehicleType?.find(
          (type) => type.title === existingType.title
        );

        if (updatedType) {
          const updatedImage = updatedType.image_base64
            ? globalFunctions.generateUniqueFilename(
                updatedType.image_extension,
                `CardImage_${existingType.title}`
              )
            : existingType.image;

          if (updatedType.image_base64) {
            documents.push({
              base64String: updatedType.image_base64,
              extension: updatedType.image_extension,
              name: updatedImage,
            });
          }

          return {
            ...existingType.toObject(),
            title: updatedType.title || existingType.title,
            content: updatedType.content || existingType.content,
            display: updatedType.display || existingType.display,
            image: updatedImage,
          };
        }
        return existingType.toObject();
      }
    );

    const offerServiceData = {
      page: page || existingVehicleGuide.page,
      paragraph: paragraph || existingVehicleGuide.paragraph,
      vehicleType: processedVehicleTypes,
    };

    const updatedOfferService =
      await vehicleGuideComponentServices.updateVehicleGuide(
        vehicleGuideId,
        offerServiceData,
        documents
      );
    res.json(updatedOfferService);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// const deleteOfferService = async (req, res) => {
//   try {
//     const OfferServiceId = req.params.id;

//     const deletedOfferService =
//       await vehicleGuideComponentServices.deleteOfferService(OfferServiceId);

//     if (!deletedOfferService) {
//       return res.status(404).send("OfferService not found");
//     }
//     res.sendStatus(200);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };
const getVehicleGuides = async (req, res) => {
  try {
    const vehicleGuides =
      await vehicleGuideComponentServices.getVehicleGuides();
    res.json(vehicleGuides);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// const addCardToOfferService = async (req, res) => {
//   try {
//     const { offerId } = req.params;
//     const { title, display, content, image_base64, image_extension, icon } =
//       req.body;
//     const imagePath = "files/offerService/";

//     let image = globalFunctions.generateUniqueFilename(
//       image_extension,
//       "OfferService"
//     );

//     let documents = [
//       {
//         base64String: image_base64,
//         extension: image_extension,
//         name: image,
//         path: imagePath,
//       },
//     ];
//     const updatedOffer =
//       await vehicleGuideComponentServices.addCardToOfferService(
//         offerId,
//         {
//           title,
//           display,
//           content,
//           image,
//           icon,
//         },
//         documents
//       );

//     if (!updatedOffer) {
//       return res.status(404).json({ message: "Offer not found" });
//     }

//     res.status(200).json(updatedOffer);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

module.exports = {
  createVehicleGuide,
  updateVehicleGuide,
  //   deleteOfferService,
  getVehicleGuides,
  //   addCardToOfferService,
};
