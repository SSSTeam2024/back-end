const htmlPageDAO = require("../../dao/htmlPageDao/htmlPageDao");

const createHTMLPage = async (data) => {
  return await htmlPageDAO.createHTMLPage(data);
};

const getHTMLPageById = async (id) => {
  return await htmlPageDAO.getHTMLPageById(id);
};

module.exports = {
  createHTMLPage,
  getHTMLPageById,
};
