const Jouney = require('../../models/journeyModels/journey');

const createJourney = async (JouneyData) => {
  return await Jouney.create(JouneyData);
};
const updateJourney = async (id, updateData) => {
    return await Jouney.findByIdAndUpdate(id, updateData, { new: true });
  };

  const deletedJouney = async (id) => {
    return await Jouney.findByIdAndDelete(id);
  };

  const getJourneys= async () => {
    return await Jouney.find();
  };

  const getJourneyByID= async (id) => {
    return await Jouney.findById(id);
  };

module.exports = {
    createJourney,
    updateJourney,
    deletedJouney,
    getJourneys,
    getJourneyByID
  };
  