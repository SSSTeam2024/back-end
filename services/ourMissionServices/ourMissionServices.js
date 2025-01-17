const ourMissionDao = require("../../dao/ourMissionDao/ourMissionDao");

const createOurMission = async (ourMissionData) => {
  return await ourMissionDao.createOurMission(ourMissionData);
};

const getOurMissions = async () => {
  return await ourMissionDao.getOurMission();
};

const updateOurMission = async (id, updateData) => {
  try {
    return await ourMissionDao.updateOurMission(id, updateData);
  } catch (error) {
    console.error("Service Error:", error);
    throw new Error("Failed to update Our Mission");
  }
};

const deleteOurMission = async (id) => {
  return await ourMissionDao.deleteOurMission(id);
};

const getOurMissionById = async (id) => {
  try {
    return await ourMissionDao.getOurMissionById(id);
  } catch (error) {
    console.error("Service Error:", error);
    throw new Error("Failed to retrieve Our Mission");
  }
};

module.exports = {
  createOurMission,
  getOurMissions,
  updateOurMission,
  deleteOurMission,
  getOurMissionById,
};
