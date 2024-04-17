const journeyDao = require('../../dao/journeyDao/journeyDao');

const createJourney = async (journeyData) => {
  return await journeyDao.createJourney(journeyData);
};

const updateJourney = async (id, updateData) => {
    return await journeyDao.updateJourney(id, updateData);
  };

  const deleteJouney = async (id) => {
    return await journeyDao.deletedJouney(id);
  };

  const getJourneys = async () => {
    return await journeyDao.getJourneys();
  };

  const getJourneyById = async (id) => {
    return await journeyDao.getJourneyByID(id);
  };

module.exports = {
    createJourney,
    updateJourney,
    deleteJouney,
    getJourneys,
    getJourneyById
  };
  