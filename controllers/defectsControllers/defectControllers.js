const defectService = require("../../services/defectServices/defectServices");

const createDefect = async (req, res) => {
  try {
    const { vehicle, time, level, issue, defectStatus, note, date } = req.body;
    const newDefect = await defectService.createDefect({
      vehicle,
      time,
      level,
      issue,
      defectStatus,
      note,
      date,
    });
    res.status(201).json(newDefect);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteDefect = async (req, res) => {
  try {
    const defectId = req.params.id;

    const deleteDefect = await defectService.deleteDefect(defectId);

    if (!deleteDefect) {
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
    const Defects = await defectService.getDefects();
    res.json(Defects);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getDefectById = async (req, res) => {
  try {
    const DefectId = req.params.id;
    const getDefect = await defectService.getDefectById(DefectId);
    if (!getDefect) {
      return res.status(404).send("Defect not found");
    }
    res.json(getDefect);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// const updateDefect = async (req, res) => {
//   try {
//     const DefectId = req.params.id;
//     const { type } = req.body;

//     const updatedDefect = await DefectService.updateDefect(DefectId, { type });

//     if (!updatedDefect) {
//       return res.status(404).send("Defect not found");
//     }
//     res.json(updatedDefect);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

module.exports = {
  deleteDefect,
  //   updateDefect,
  createDefect,
  getDefects,
  getDefectById,
};
