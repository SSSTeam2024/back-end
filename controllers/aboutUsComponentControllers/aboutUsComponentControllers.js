const aboutUsComponentServices = require("../../services/aboutUsComponentServices/aboutUsComponentServices");
const globalFunctions = require("../../utils/globalFunctions");

const createAboutUs = async (req, res) => {
  try {
    const {
      image_base64,
      image_extension,
      littleTitle,
      bigTitle,
      paragraph,
      button,
      page,
    } = req.body;

    let imageFilename = globalFunctions.generateUniqueFilename(
      image_extension,
      "aboutUsImage"
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

    const newAboutUs = await aboutUsComponentServices.createAboutUs(
      {
        image,
        littleTitle,
        bigTitle,
        paragraph,
        button,
        page,
      },
      documents
    );

    res.status(201).json(newAboutUs);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateAboutUs = async (req, res) => {
  try {
    const AboutUsId = req.params.id;
    const {
      image_base64,
      image_extension,
      littleTitle,
      bigTitle,
      paragraph,
      button,
      image,
      page,
    } = req.body;

    let AboutUsBody = {
      littleTitle,
      bigTitle,
      paragraph,
      button,
      page,
    };

    let documents = [];
    if (image_base64) {
      let imageFilename = globalFunctions.generateUniqueFilename(
        image_extension,
        "aboutUsImage"
      );

      documents.push({
        base64String: image_base64,
        extension: image_extension,
        name: imageFilename,
      });

      AboutUsBody.image = {
        path: imageFilename,
        display: image?.display || "1",
      };
    } else if (image) {
      AboutUsBody.image = image;
    }

    const updatedAboutUs = await aboutUsComponentServices.updateAboutUs(
      AboutUsId,
      AboutUsBody,
      documents
    );

    if (!updatedAboutUs) {
      return res.status(404).send("AboutUs not found");
    }
    res.json(updatedAboutUs);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteAboutUs = async (req, res) => {
  try {
    const AboutUsId = req.params.id;

    const deletedAboutUs = await aboutUsComponentServices.deleteAboutUs(
      AboutUsId
    );

    if (!deletedAboutUs) {
      return res.status(404).send("AboutUs not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getAboutUs = async (req, res) => {
  try {
    const aboutUs = await aboutUsComponentServices.getAboutUs();
    res.json(aboutUs);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createAboutUs,
  updateAboutUs,
  deleteAboutUs,
  getAboutUs,
};
