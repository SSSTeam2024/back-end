const HTMLPage = require("../../models/htmlPageModel/htmlPageModel");

const createHTMLPage = async (htmlPageData) => {
  return await HTMLPage.create(htmlPageData);
};

const getHTMLPageById = async (id) => {
  return await HTMLPage.findById(id).populate(
    "header menu aboutUs ourValues offerServices footerList socialMedia"
  );
};

module.exports = {
  createHTMLPage,
  getHTMLPageById,
};
