const defectService = require("../../services");

const createDefect = async (req, res) => {
  try {
    const { type } = req.body;
    const newDefect = await DefectService.createDefect({ type });
    res.status(201).json(newDefect);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteJouney = async (req, res) => {
  try {
    const DefectId = req.params.id;

    const deletedJouney = await DefectService.deleteJouney(DefectId);

    if (!deletedJouney) {
      return res.status(404).send("Defect not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getDefects = async (req, res) => {
  try {
    const Defects = await DefectService.getDefects();
    res.json(Defects);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getDefectById = async (req, res) => {
  try {
    const DefectId = req.params.id;
    const getDefect = await DefectService.getDefectById(DefectId);
    if (!getDefect) {
      return res.status(404).send("Defect not found");
    }
    res.json(getDefect);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateDefect = async (req, res) => {
  try {
    const DefectId = req.params.id;
    const { type } = req.body;

    const updatedDefect = await DefectService.updateDefect(DefectId, { type });

    if (!updatedDefect) {
      return res.status(404).send("Defect not found");
    }
    res.json(updatedDefect);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  deleteJouney,
  updateDefect,
  createDefect,
  getDefects,
  getDefectById,
};
