const teamDao = require("../../dao/teamDao/teamDao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");

// register a new team 
const registerTeam = async (teamData, documents) => {
    console.log(teamData);
    console.log(documents);
    let saveResult = await saveDocumentsToServer(documents);
    console.log(saveResult);
  const hashedPassword = await bcrypt.hash(teamData.password, 10);
  return await teamDao.createTeam({ ...teamData, password: hashedPassword });
};

async function saveDocumentsToServer(documents){
    let counter = 0;
    for (const file of documents){
      console.log(file);
        await saveAdministrativeFile(file.base64String, file.name);
        counter++;
        console.log('File number '+counter+' saved');
    }
    if(counter == documents.length) return true;
}

 async function saveAdministrativeFile(base64String, fileName){
    const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, '');
    const binaryData = Buffer.from(base64Data, 'base64');
    const filePath = 'files/teamFiles/'+fileName;
    fs.writeFile(filePath, binaryData, 'binary', (err) => {
      if (err) {
        console.error('Error saving the file:', err);
      } else {
        console.log('File saved successfully!');
      }
    });
}
// login team account
const loginTeam = async (login, password) => {
    const team = await teamDao.findteamByLogin(login);
  
    if (!team) {
      throw new Error('Team not found');
    }
  
    if (await bcrypt.compare(password, team.password)) {
      const accessToken = jwt.sign({ login: team.login }, 'yourSecretKey');
      return { accessToken };
    } else {
      throw new Error('Incorrect password');
    }
  };
  
//delete team 
const deleteTeam = async (id) => {
    return await teamDao.deleteTeam(id);
  };

  // udpate team
const updatedTeam = async (id, updateData) => {
    return await teamDao.updateTeam(id, updateData);
  };
  // update password
const updatePassword = async (id, password) => {
    console.log(password);
    const hashedPassword = await bcrypt.hash(password.password, 10);
    return await teamDao.updatePassword(id, hashedPassword);
  };

  // get team by id
const getTeamById = async (id) => {
    return await teamDao.getTeamById(id);
  }
// get all teams
const getTeams = async () => {
    return await teamDao.getAllTeams();
  };
// get team by email address
const getTeamByEmail = async (email) => {
    return await teamDao.getTeamEmail(email);
  };

  module.exports = {
    registerTeam,
    loginTeam,
    deleteTeam,
    updatedTeam,
    updatePassword,
    getTeamById,
    getTeams,
    getTeamByEmail

   
  };