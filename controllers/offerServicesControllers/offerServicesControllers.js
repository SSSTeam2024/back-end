const offerServicesService = require("../../services/offerServicesService/offerServicesService");
const globalFunctions = require("../../utils/globalFunctions");

const createOfferService = async (req, res) => {
  try {
    const { littleTitle, bigTitle, cards, associatedPage } = req.body;

    const documents = [];
    const processedCards = cards.map((card, index) => {
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
      littleTitle,
      bigTitle,
      cards: processedCards,
      associatedPage,
    };

    const newOfferService = await offerServicesService.createOfferService(
      offerServiceData,
      documents
    );

    res.status(201).json(newOfferService);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateOfferService = async (req, res) => {
  try {
    const OfferServiceId = req.params.id;
    const { littleTitle, bigTitle, cards, associatedPage } = req.body;
    const existingOfferService = await offerServicesService.getOfferServiceById(
      OfferServiceId
    );

    if (!existingOfferService) {
      return res.status(404).send("Offer Service not found");
    }

    let documents = [];

    const processedCards = existingOfferService.cards.map((existingCard) => {
      const updatedCard = cards?.find(
        (card) => card.title === existingCard.title
      );

      if (updatedCard) {
        const updatedImage = updatedCard.image_base64
          ? globalFunctions.generateUniqueFilename(
              updatedCard.image_extension,
              `CardImage_${existingCard.title}`
            )
          : existingCard.image;

        if (updatedCard.image_base64) {
          documents.push({
            base64String: updatedCard.image_base64,
            extension: updatedCard.image_extension,
            name: updatedImage,
          });
        }

        return {
          ...existingCard.toObject(), // Convert Mongoose document to plain object
          content: updatedCard.content || existingCard.content,
          icon: updatedCard.icon || existingCard.icon,
          image: updatedImage,
        };
      }

      return existingCard.toObject(); // Convert to plain object
    });

    const offerServiceData = {
      littleTitle: littleTitle || existingOfferService.littleTitle,
      bigTitle: bigTitle || existingOfferService.bigTitle,
      cards: processedCards,
      associatedPage,
    };

    // Call the update service with updated data and documents
    const updatedOfferService = await offerServicesService.updateOfferService(
      OfferServiceId,
      offerServiceData,
      documents
    );
    res.json(updatedOfferService);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteOfferService = async (req, res) => {
  try {
    const OfferServiceId = req.params.id;

    const deletedOfferService = await offerServicesService.deleteOfferService(
      OfferServiceId
    );

    if (!deletedOfferService) {
      return res.status(404).send("OfferService not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getOfferService = async (req, res) => {
  try {
    const OfferService = await offerServicesService.getOfferService();
    res.json(OfferService);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const addCardToOfferService = async (req, res) => {
  try {
    const { offerId } = req.params;
    const { title, display, content, image_base64, image_extension, icon } =
      req.body;
    const imagePath = "files/offerService/";

    let image = globalFunctions.generateUniqueFilename(
      image_extension,
      "OfferService"
    );

    let documents = [
      {
        base64String: image_base64,
        extension: image_extension,
        name: image,
        path: imagePath,
      },
    ];
    const updatedOffer = await offerServicesService.addCardToOfferService(
      offerId,
      {
        title,
        display,
        content,
        image,
        icon,
      },
      documents
    );

    if (!updatedOffer) {
      return res.status(404).json({ message: "Offer not found" });
    }

    res.status(200).json(updatedOffer);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createOfferService,
  updateOfferService,
  deleteOfferService,
  getOfferService,
  addCardToOfferService,
};
