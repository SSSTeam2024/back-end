const headerServices = require("../../services/headerServices/headerServices");
const globalFunctions = require("../../utils/globalFunctions");

const createHeader = async (req, res) => {
  try {
    const {
      logo_link,
      logo_base64,
      logo_extension,
      phone_label,
      phone_value,
      email_label,
      email_value,
      button_text,
      button_link,
      color,
      address_label,
      address_value,
      phone_display,
      email_display,
      button_display,
      address_display,
    } = req.body;

    let logo = globalFunctions.generateUniqueFilename(
      logo_extension,
      "logoSite"
    );

    let documents = [
      {
        base64String: logo_base64,
        extension: logo_extension,
        name: logo,
      },
    ];
    const newHeader = await headerServices.createHeader(
      {
        logo_link,
        logo,
        phone_label,
        phone_value,
        email_label,
        email_value,
        button_text,
        button_link,
        color,
        address_label,
        address_value,
        phone_display,
        email_display,
        button_display,
        address_display,
      },
      documents
    );
    res.status(201).json(newHeader);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateHeader = async (req, res) => {
  try {
    const HeaderId = req.params.id;
    const {
      logo_link,
      logo_base64,
      logo_extension,
      phone_label,
      phone_value,
      email_label,
      email_value,
      button_text,
      button_link,
      color,
      address_label,
      address_value,
      phone_display,
      email_display,
      button_display,
      address_display,
    } = req.body;

    let logo = globalFunctions.generateUniqueFilename(
      logo_extension,
      "logoSite"
    );

    let headerBody = {
      logo_link,
      phone_label,
      phone_value,
      email_label,
      email_value,
      button_text,
      button_link,
      color,
      address_label,
      address_value,
      phone_display,
      email_display,
      button_display,
      address_display,
    };
    let documents = [
      {
        base64String: logo_base64,
        extension: logo_extension,
        name: logo,
      },
    ];
    if (documents[0].base64String != undefined) {
      headerBody.logo = documents[0].name;
    }

    const updatedHeader = await headerServices.updateHeader(
      HeaderId,
      headerBody,
      documents
    );
    if (!updatedHeader) {
      return res.status(404).send("Header not found");
    }
    res.json(updatedHeader);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteHeader = async (req, res) => {
  try {
    const HeaderId = req.params.id;

    const deletedHeader = await headerServices.deleteHeader(HeaderId);

    if (!deletedHeader) {
      return res.status(404).send("Header not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getHeaders = async (req, res) => {
  try {
    const Headers = await headerServices.getHeaders();
    res.json(Headers);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createHeader,
  updateHeader,
  deleteHeader,
  getHeaders,
};
