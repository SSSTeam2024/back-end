
const PassengerLuggageLimitsService = require('../../services/passenegerLuggageLimitsService/passenegerLuggageLimitsService');

const createPassengerLuggageLimits = async (req, res) => {
    try {
      const {max_luggage, vehicle_type, max_passengers} = req.body;
       const newPassengerLuggageLimits = await PassengerLuggageLimitsService.createPassengerLuggageLimits({max_luggage, vehicle_type, max_passengers});
       res.status(201).json(newPassengerLuggageLimits);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };


  const updatePassengerLuggageLimits = async (req, res) => {
    try {
      const passengerLuggageLimitsId = req.params.id;
      const {max_luggage, vehicle_type, max_passengers} = req.body;
  
      const updatedpassengerLuggageLimits= await PassengerLuggageLimitsService.updatePassengerLuggageLimits(passengerLuggageLimitsId, {max_luggage, vehicle_type, max_passengers} );
  
      if (!updatedpassengerLuggageLimits) {
        return res.status(404).send('Passenger Luggage Limits not found');
      }
      res.json(updatedpassengerLuggageLimits);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

  const deletePassengerLuggageLimits = async (req, res) => {
    try {
      const passengerLuggageLimitsId = req.params.id;
  
      const deletedPassengerLuggageLimits = await PassengerLuggageLimitsService.deletePassengerLuggageLimits(passengerLuggageLimitsId);
  
      if (!deletedPassengerLuggageLimits) {
        return res.status(404).send('Passenger Luggage Limits not found');
      }
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };
  const getPassengerLuggageLimits = async (req, res) => {
    try {
      const passengerLuggageLimits = await PassengerLuggageLimitsService.getPassengerLuggageLimits();
      res.json( passengerLuggageLimits );
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

  module.exports = {
    getPassengerLuggageLimits,
    deletePassengerLuggageLimits,
    updatePassengerLuggageLimits,
    createPassengerLuggageLimits
  };