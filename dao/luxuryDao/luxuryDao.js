const Luxury = require('../../models/luxuryModel/luxury');

const createLuxury = async (luxuryData) => {
  return await Luxury.create(luxuryData);
};

const getLuxurys = async () => {
  return await Luxury.find();
};

const getLuxuryById = async (id) => {
  return await Luxury.findById(id);
}

const getLuxuryByName = async (name) => {
  return await Luxury.findOne({ name });
}

const updateLuxury = async (id, updateData) => {
  return await Luxury.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteLuxury = async (id) => {
  return await Luxury.findByIdAndDelete(id);
};

module.exports = {
  createLuxury,
  getLuxurys,
  getLuxuryById,
  updateLuxury,
  deleteLuxury,
  getLuxuryByName
};
