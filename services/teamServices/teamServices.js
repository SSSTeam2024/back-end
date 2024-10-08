const teamDao = require("../../dao/teamDao/teamDao");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");

// register a new team
const registerTeam = async (teamData, documents) => {
  let saveResult = await saveDocumentsToServer(documents);
  const hashedPassword = await bcrypt.hash(teamData.password, 10);
  return await teamDao.createTeam({ ...teamData, password: hashedPassword });
};

async function saveDocumentsToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    await saveFile(file.base64String, file.name, file.path);
    counter++;
  }
  if (counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path) {
  if (base64String != undefined) {
    const binaryData = Buffer.from(base64String, "base64");
    const filePath = file_path + fileName;
    await globalFunctions.ensureDirectoryExistence(file_path);
    fs.writeFile(filePath, binaryData, "binary", (err) => {
      if (err) {
        console.error("Error saving the file:", err);
      } else {
        console.log("File saved successfully!");
      }
    });
  }
}
// login team account
const loginTeam = async (login, password) => {
  const team = await teamDao.findteamByLogin(login);

  if (!team) {
    throw new Error("Team not found");
  }

  if (await bcrypt.compare(password, team.password)) {
    const accessToken = jwt.sign({ login: team.login }, "yourSecretKey");
    return { accessToken };
  } else {
    throw new Error("Incorrect password");
  }
};

//delete team
const deleteTeam = async (id) => {
  return await teamDao.deleteTeam(id);
};

// udpate team
const updatedTeam = async (id, updateData, documents) => {
  let saveResult = await saveDocumentsToServer(documents);

  return await teamDao.updateTeam(id, updateData, documents);
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
};
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
  getTeamByEmail,
};
