const footerListServices = require("../../services/footerListServices/footerListServices");

const createFooterList = async (req, res) => {
  try {
    const { name, items, order, display } = req.body;

    await footerListServices.createFooterList({ name, items, order, display });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getFooterLists = async (req, res) => {
  try {
    const FooterLists = await footerListServices.getFooterLists();
    res.json(FooterLists);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateFooterList = async (req, res) => {
  try {
    const footerListId = req.params.id;
    const { name, items, order, display } = req.body;

    const updatedFooterList = await footerListServices.updateFooterList(
      footerListId,
      {
        name,
        items,
        order,
        display,
      }
    );

    if (!updatedFooterList) {
      return res.status(404).send("Footer List not found");
    }
    res.json(updatedFooterList);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteFooterList = async (req, res) => {
  try {
    const footerListId = req.params.id;

    const deleteFooterList = await footerListServices.deleteFooterList(
      footerListId
    );

    if (!deleteFooterList) {
      return res.status(404).send("Footer List not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const addItemToFooterList = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Debug log
    const { footerListId } = req.params;
    const newItem = req.body;
    const updatedFooterList = await footerListServices.addItemToFooterList(
      footerListId,
      newItem
    );
    res.status(200).json(updatedFooterList);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createFooterList,
  getFooterLists,
  updateFooterList,
  deleteFooterList,
  addItemToFooterList,
};
