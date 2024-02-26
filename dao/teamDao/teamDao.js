const Team = require('../../models/teamModels/teamModels');

const createTeam = async (teamData) => {
    return await Team.create(teamData);
  };
  // find team by login
  const findteamByLogin = async (login) => {
    return await Team.findOne({ login });
  };

  // delete Team profile
const deleteTeam = async (id) => {
    return await Team.findByIdAndDelete(id);
  };

  // update Team profile
  const updateTeam= async (id, updateData) => {
    return await Team.findByIdAndUpdate(id, updateData, { new: true });
  };

   // update password
   const updatePassword = async (id, password) => {
    console.log('Hashed pwd: '+password);
    return await Team.findByIdAndUpdate({ _id:id }, {
      $set: {
        password: password
      }
    });
  }

  // get Team by id
const getTeamById = async (id) => {
    try {
      console.log("Querying database for team with ID:", id);
      const getTeam = await Team.findOne({ _id: id });
      console.log("Result from database:", getTeam);
      return getTeam;
    } catch (error) {
      throw error;
    }
  };

  // get all Teams
  const getAllTeams = async () => {
    return await Team.find({});

  };  // get Team by email address
  const getTeamEmail = async (email) => {
    return await Team.findOne({ email });
  }
  module.exports = {
    createTeam,
    findteamByLogin,
    deleteTeam,
    updateTeam,
    updatePassword,
    getTeamById,
    getAllTeams,
    getTeamEmail
    
};