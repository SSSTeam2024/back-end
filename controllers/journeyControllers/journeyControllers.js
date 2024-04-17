
const journeyService = require('../../services/journeyServices/journeyService');

const createJourney = async (req, res) => {
    try {
      const {type} = req.body;
       const newJourney = await journeyService.createJourney({ type });
       res.status(201).json(newJourney);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };


  const updateJourney = async (req, res) => {
    try {
      const journeyId = req.params.id;
      const { type } = req.body;
  
      const updatedJourney = await journeyService.updateJourney(journeyId, { type });
  
      if (!updatedJourney) {
        return res.status(404).send('Journey not found');
      }
      res.json(updatedJourney);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

  const deleteJouney = async (req, res) => {
    try {
      const journeyId = req.params.id;
  
      const deletedJouney = await journeyService.deleteJouney(journeyId);
  
      if (!deletedJouney) {
        return res.status(404).send('Journey not found');
      }
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };
  const getJourneys = async (req, res) => {
    try {
      const journeys = await journeyService.getJourneys();
      res.json( journeys );
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

  const getJourneyById = async (req, res) => {
    try {
      const journeyId = req.params.id;
      const getJourney = await journeyService.getJourneyById(journeyId);
      if (!getJourney) {
        return res.status(404).send("Journey not found");
      }
      res.json(getJourney);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

  module.exports = {
    deleteJouney,
    updateJourney,
    createJourney,
    getJourneys,
    getJourneyById
  };
  