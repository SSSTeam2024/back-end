const bestOfferComponentServices = require("../../services/bestOfferComponentServices/bestOfferComponentServices");
const globalFunctions = require("../../utils/globalFunctions");

const createBestOffer = async (req, res) => {
  try {
    const {
      page,
      display,
      image_base64,
      image_extension,
      littleTitle,
      bigTitle,
      subTitle,
      liltleSubTitle,
      tabs,
    } = req.body;

    let imageFilename = globalFunctions.generateUniqueFilename(
      image_extension,
      "BestOfferImage"
    );

    const image = {
      path: imageFilename,
      display: "1",
    };

    let documents = [
      {
        base64String: image_base64,
        extension: image_extension,
        name: imageFilename,
      },
    ];

    const newBestOffer = await bestOfferComponentServices.createBestOffer(
      {
        page,
        display,
        image,
        littleTitle,
        bigTitle,
        subTitle,
        liltleSubTitle,
        tabs,
      },
      documents
    );

    res.status(201).json(newBestOffer);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateBestOffer = async (req, res) => {
  try {
    const BestOfferId = req.params.id;
    const {
      page,
      display,
      image_base64,
      image_extension,
      littleTitle,
      bigTitle,
      subTitle,
      liltleSubTitle,
      tabs,
      image,
    } = req.body;

    let BestOfferBody = {
      page,
      display,
      littleTitle,
      bigTitle,
      subTitle,
      liltleSubTitle,
      tabs,
    };

    let documents = [];
    if (image_base64) {
      let imageFilename = globalFunctions.generateUniqueFilename(
        image_extension,
        "BestOfferImage"
      );

      documents.push({
        base64String: image_base64,
        extension: image_extension,
        name: imageFilename,
      });

      BestOfferBody.image = {
        path: imageFilename,
        display: image?.display || "1",
      };
    } else if (image) {
      BestOfferBody.image = image;
    }

    const updateBestOffer = await bestOfferComponentServices.updateBestOffer(
      BestOfferId,
      BestOfferBody,
      documents
    );

    if (!updateBestOffer) {
      return res.status(404).send("Best Offer not found");
    }
    res.json(updateBestOffer);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteBestOffer = async (req, res) => {
  try {
    const BestOfferId = req.params.id;

    const deletedBestOffer = await bestOfferComponentServices.deleteBestOffer(
      BestOfferId
    );

    if (!deletedBestOffer) {
      return res.status(404).send("Best Offer not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getBestOffer = async (req, res) => {
  try {
    const BestOffer = await bestOfferComponentServices.getBestOffer();
    res.json(BestOffer);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const addTabToBestOffer = async (req, res) => {
  try {
    const { valueId } = req.params;
    const { title, display, content, buttonLabel, buttonLink, buttonDisplay } =
      req.body;

    const updatedValue = await bestOfferComponentServices.addTabToBestOffer(
      valueId,
      {
        title,
        display,
        content,
        buttonLabel,
        buttonLink,
        buttonDisplay,
      }
    );

    if (!updatedValue) {
      return res.status(404).json({ message: "Value not found" });
    }

    res.status(200).json(updatedValue);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createBestOffer,
  updateBestOffer,
  deleteBestOffer,
  getBestOffer,
  addTabToBestOffer,
};
