const ourMissionServices = require("../../services/ourMissionServices/ourMissionServices");

const createOurMission = async (req, res) => {
  try {
    // Extract data from the request body
    const { missions } = req.body;

    // Wrap the data in an array for the new schema structure
    const missionData = { missions };

    // Call the service to create the new mission entry
    await ourMissionServices.createOurMission(missionData);

    // Send a success response
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getOurMissions = async (req, res) => {
  try {
    const OurMissions = await ourMissionServices.getOurMissions();
    res.json(OurMissions);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateOurMission = async (req, res) => {
  try {
    const OurMissionId = req.params.id;
    const { missions } = req.body;

    // Check if the document exists
    const existingDocument = await ourMissionServices.getOurMissionById(
      OurMissionId
    );
    if (!existingDocument) {
      return res.status(404).send("Our Mission not found");
    }

    // Pass the full missions array to the service
    const updatedOurMission = await ourMissionServices.updateOurMission(
      OurMissionId,
      { missions }
    );

    res.json(updatedOurMission);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteOurMission = async (req, res) => {
  try {
    const OurMissionId = req.params.id;

    const deletedOurMission = await ourMissionServices.deleteOurMission(
      OurMissionId
    );

    if (!deletedOurMission) {
      return res.status(404).send("OurMission not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createOurMission,
  getOurMissions,
  updateOurMission,
  deleteOurMission,
};
