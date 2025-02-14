const OurMission = require("../../models/ourMissionComponentModel/ourMissionComponentModel");

const createOurMission = async (ourMissionData) => {
  // Use `insertMany` to save multiple documents at once
  return await OurMission.insertMany(ourMissionData);
};

const getOurMission = async () => {
  return await OurMission.find();
};

const updateOurMission = async (id, updateData) => {
  return await Promise.all(
    updateData.missions.map(async (mission) => {
      const { page, display, littleTitle, bigTitle, content, order } = mission;

      return await OurMission.findOneAndUpdate(
        {
          _id: id,
          "missions.page": page,
        },
        {
          $set: {
            "missions.$.display": display,
            "missions.$.littleTitle": littleTitle,
            "missions.$.bigTitle": bigTitle,
            "missions.$.content": content,
            "missions.$.order": String(order),
          },
        },
        { new: true }
      );
    })
  );
};

const deleteOurMission = async (id) => {
  return await OurMission.findByIdAndDelete(id);
};

const getOurMissionById = async (id) => {
  return await OurMission.findById(id);
};

module.exports = {
  createOurMission,
  getOurMission,
  updateOurMission,
  deleteOurMission,
  getOurMissionById,
};
