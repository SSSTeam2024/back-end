const ourValueComponentServices = require("../../services/ourValueComponentServices/ourValueComponentServices");
const globalFunctions = require("../../utils/globalFunctions");

const createOurValue = async (req, res) => {
  try {
    const {
      page,
      display,
      image_base64,
      image_extension,
      littleTitle,
      bigTitle,
      subTitle,
      tabs,
      newImage,
    } = req.body;

    let imageFilename = globalFunctions.generateUniqueFilename(
      image_extension,
      "OurValueImage"
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
      documents.push([
        {
          base64String: image_base64,
          extension: image_extension,
          name: imageFilename,
        },
      ]);
    }

    const newOurValue = await ourValueComponentServices.createOurValue(
      {
        page,
        display,
        image,
        littleTitle,
        bigTitle,
        subTitle,
        tabs,
      },
      documents
    );

    res.status(201).json(newOurValue);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateOurValue = async (req, res) => {
  try {
    const OurValueId = req.params.id;
    const {
      image_base64,
      image_extension,
      littleTitle,
      bigTitle,
      subTitle,
      tabs,
      image,
      display,
    } = req.body;

    let OurValueBody = {
      littleTitle,
      bigTitle,
      subTitle,
      tabs,
      display,
    };

    let documents = [];
    if (image_base64) {
      let imageFilename = globalFunctions.generateUniqueFilename(
        image_extension,
        "OurValueImage"
      );

      documents.push({
        base64String: image_base64,
        extension: image_extension,
        name: imageFilename,
      });

      OurValueBody.image = {
        path: imageFilename,
        display: image?.display || "1",
      };
    } else if (image) {
      OurValueBody.image = image;
    }

    const updatedOurValue = await ourValueComponentServices.updateOurValue(
      OurValueId,
      OurValueBody,
      documents
    );

    if (!updatedOurValue) {
      return res.status(404).send("OurValue not found");
    }
    res.json(updatedOurValue);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteOurValue = async (req, res) => {
  try {
    const OurValueId = req.params.id;

    const deletedOurValue = await ourValueComponentServices.deleteOurValue(
      OurValueId
    );

    if (!deletedOurValue) {
      return res.status(404).send("OurValue not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getOurValue = async (req, res) => {
  try {
    const OurValue = await ourValueComponentServices.getOurValue();
    res.json(OurValue);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const addTabToOurValue = async (req, res) => {
  try {
    const { valueId } = req.params;
    const { title, display, content, buttonLabel, buttonLink, buttonDisplay } =
      req.body;

    const updatedValue = await ourValueComponentServices.addTabToOurValue(
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
  createOurValue,
  updateOurValue,
  deleteOurValue,
  getOurValue,
  addTabToOurValue,
};
