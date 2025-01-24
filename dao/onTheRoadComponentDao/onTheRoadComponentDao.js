const OnTheRoad = require("../../models/onTheRoadComponentModel/onTheRoadComponentModel");

const createOnTheRoad = async (onTheRoadData) => {
  return await OnTheRoad.create(onTheRoadData);
};

const getOnTheRoads = async () => {
  return await OnTheRoad.find();
};

const getOnTheRoadById = async (id) => {
  return await OnTheRoad.findById(id);
};

const deleteOnTheRoad = async (id) => {
  return await OnTheRoad.findByIdAndDelete(id);
};

const updateOnTheRoad = async (id, updateData) => {
  return await OnTheRoad.findByIdAndUpdate(id, updateData, { new: true });
};

module.exports = {
  createOnTheRoad,
  getOnTheRoads,
  getOnTheRoadById,
  deleteOnTheRoad,
  updateOnTheRoad,
};
