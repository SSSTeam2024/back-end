const block1ComponentServices = require("../../services/block1ComponentServices/block1ComponentServices");
const globalFunctions = require("../../utils/globalFunctions");

const createBlock1 = async (req, res) => {
  try {
    const {
      page,
      image_base64,
      image_extension,
      littleTitle,
      bigTitle,
      subTitle,
      tabs,
      display,
      newImage,
      typeComponent,
      order,
    } = req.body;

    let imageFilename = globalFunctions.generateUniqueFilename(
      image_extension,
      "Block1Image"
    );

    let documents = [];
    let image = {};
    if (newImage === "no") {
      image = req.body.image;
    } else {
      image = {
        path: imageFilename,
        display: "1",
      };

      documents = [
        {
          base64String: image_base64,
          extension: image_extension,
          name: imageFilename,
        },
      ];
    }
    const newBlock1 = await block1ComponentServices.createBlock1(
      {
        page,
        image,
        littleTitle,
        bigTitle,
        subTitle,
        tabs,
        display,
        typeComponent,
        order,
      },
      documents
    );

    res.status(201).json(newBlock1);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateBlock1 = async (req, res) => {
  try {
    const block1Id = req.params.id;
    const {
      page,
      image_base64,
      image_extension,
      littleTitle,
      bigTitle,
      subTitle,
      tabs,
      image,
      display,
      typeComponent,
      order,
    } = req.body;

    let block1Body = {
      page,
      littleTitle,
      bigTitle,
      subTitle,
      tabs,
      display,
      typeComponent,
      order,
    };

    let documents = [];
    if (image_base64) {
      let imageFilename = globalFunctions.generateUniqueFilename(
        image_extension,
        "Block1Image"
      );

      documents.push({
        base64String: image_base64,
        extension: image_extension,
        name: imageFilename,
      });

      block1Body.image = {
        path: imageFilename,
        display: image?.display || "1",
      };
    } else if (image) {
      block1Body.image = image;
    }

    const updateBlock1 = await block1ComponentServices.updateBlock1(
      block1Id,
      block1Body,
      documents
    );

    if (!updateBlock1) {
      return res.status(404).send("Block1 not found");
    }
    res.json(updateBlock1);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteBestOffer = async (req, res) => {
  try {
    const BestOfferId = req.params.id;

    const deletedBestOffer = await block1ComponentServices.deleteBestOffer(
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
const getBlock1 = async (req, res) => {
  try {
    const block1s = await block1ComponentServices.getBlock1();
    res.json(block1s);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createBlock1,
  updateBlock1,
  deleteBestOffer,
  getBlock1,
};
