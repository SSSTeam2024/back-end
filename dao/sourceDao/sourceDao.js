const Source = require('../../models/sourceModel/source');

const createSource = async (sourceData) => {
  return await Source.create(sourceData);
};

const getSources = async () => {
  return await Source.find();
};

const updateSource = async (id, updateData) => {
  return await Source.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteSource = async (id) => {
  return await Source.findByIdAndDelete(id);
};

module.exports = {
  createSource,
  getSources,
  updateSource,
  deleteSource,
};
