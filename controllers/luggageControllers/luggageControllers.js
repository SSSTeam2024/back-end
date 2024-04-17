
const luggageService = require('../../services/luggageServices/luggageService');

const createLuggage = async (req, res) => {
    try {
      const {size,description} = req.body;
       const newLuggage = await luggageService.createLuggage({ size,description });
       res.status(201).json(newLuggage);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };


  const updateLuggage = async (req, res) => {
    try {
      const luggageId = req.params.id;
      const { size, description } = req.body;
  
      const updatedLuggage = await luggageService.updateLuggage(luggageId, { size, description });
  
      if (!updatedLuggage) {
        return res.status(404).send('Luggage not found');
      }
      res.json(updatedLuggage);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

  const deleteLuggage = async (req, res) => {
    try {
      const luggageId = req.params.id;
  
      const deletedLuggage = await luggageService.deleteLuggage(luggageId);
  
      if (!deletedLuggage) {
        return res.status(404).send('Luggage not found');
      }
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };
  const getLuggages = async (req, res) => {
    try {
      const luggages = await luggageService.getLuggages();
      res.json( luggages );
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

  const getLuggageById = async (req, res) => {
    try {
      const luggageId = req.params.id;
      const getLuggage = await luggageService.getLuagggeById(luggageId);
      if (!getLuggage) {
        return res.status(404).send("Luggage not found");
      }
      res.json(getLuggage);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

  module.exports = {
    createLuggage,
    updateLuggage,
    deleteLuggage,
    getLuggages,
    getLuggageById
  };
  