const checkListService = require("../../services/checkListServices/checkListServices");

const createCheckList = async (req, res) => {
  try {
    const { quote_id, list } = req.body;
    const newCheckList = await checkListService.createCheckList(quote_id,{ list });
    res.status(201).json(newCheckList);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateCheckList = async (req, res) => {
  try {
    const checkListId = req.params.id;
    const { list } = req.body;

    const updatedCheckList = await checkListService.updateCheckList(checkListId, {
      list
    });

    if (!updatedCheckList) {
      return res.status(404).send("Duty check not found");
    }
    res.json(updatedCheckList);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteCheckList = async (req, res) => {
  try {
    const checkListId = req.params.id;

    const deletedCheckList = await checkListService.deleteCheckList(checkListId);

    if (!deletedCheckList) {
      return res.status(404).send("Duty check not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getCheckLists = async (req, res) => {
  try {
    const checkLists = await checkListService.getCheckLists();
    res.json(checkLists);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  deleteCheckList,
  updateCheckList,
  createCheckList,
  getCheckLists,
};