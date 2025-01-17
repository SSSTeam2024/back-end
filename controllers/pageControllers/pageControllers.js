const pagesServices = require("../../services/pagesServices/pagesServices");

const createPage = async (req, res) => {
  try {
    const { label, link } = req.body;

    await pagesServices.createPage({ label, link });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getPages = async (req, res) => {
  try {
    const Pages = await pagesServices.getPages();
    res.json(Pages);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updatePage = async (req, res) => {
  try {
    const PageId = req.params.id;
    const { label, link } = req.body;

    const updatedPage = await pagesServices.updatePage(PageId, {
      label,
      link,
    });

    if (!updatedPage) {
      return res.status(404).send("Page not found");
    }
    res.json(updatedPage);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deletePage = async (req, res) => {
  try {
    const PageId = req.params.id;

    const deletedPage = await pagesServices.deletePage(PageId);

    if (!deletedPage) {
      return res.status(404).send("Page not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createPage,
  getPages,
  updatePage,
  deletePage,
};
