const teamService = require("../../services/teamServices/teamServices");
const globalFunctions = require("../../utils/globalFunction");
// register team
const registerTeam = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      birth_date,
      nationality,
      gender,
      marital_status,
      number_of_childs,
      legal_card,
      address,
      email,
      phone,
      statusTeam,
      login,
      access_level,
      password,
      contract_type,
      service_date,
      bank_name,
      account_number,
      account_name,
      sort_code,
      salary,
      id_card_date,
      IdFileBase64String,
      IdFileExtension,
      avatarBase64String,
      avatarExtension,
    } = req.body;

    const FilesPath = 'files/driverFiles/idsFiles/';
    const profilePath = 'files/driverFiles/avatarImages/';

    let id_file = globalFunctions.generateUniqueFilename(
      IdFileExtension,
      "teamId"
    );

    let avatar = globalFunctions.generateUniqueFilename(
      avatarExtension,
      "avatar"
    );

    let documents = [
      {
        base64String: IdFileBase64String,
        extension: IdFileExtension,
        name: id_file,
        path: FilesPath
      },
      {
        base64String: avatarBase64String,
        extension: avatarExtension,
        name: avatar,
        path: profilePath
      },
    ];

    await teamService.registerTeam(
      {
        firstName,
        lastName,
        birth_date,
        nationality,
        gender,
        marital_status,
        number_of_childs,
        legal_card,
        address,
        email,
        phone,
        statusTeam,
        login,
        access_level,
        password,
        service_date,
        bank_name,
        account_number,
        account_name,
        sort_code,
        contract_type,
        salary,
        id_card_date,
        id_file,
        avatar
      },
      documents
    );
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// login parent
const login = async (req, res) => {
  try {
    const { login, password } = req.body;
    const result = await teamService.loginTeam(login, password);
    res.cookie("access_token", result.accessToken, {
      httpOnly: true,
      secure: true,
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(401).send(error.message);
  }
};

// logout
const logout = (req, res) => {
  res.clearCookie("access_token");
  res.sendStatus(200);
};

// delete parent account
const deleteTeam = async (req, res) => {
  try {
    const teamId = req.params.id;

    const deletedTeam = await teamService.deleteTeam(teamId);

    if (!deletedTeam) {
      return res.status(404).send("Team not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// update team profile
const updateProfile = async (req, res) => {
  try {
    const teamId = req.params.id;
    const {
      firstName,
      lastName,
      birth_date,
      nationality,
      gender,
      marital_status,
      number_of_childs,
      legal_card,
      address,
      email,
      phone,
      statusTeam,
      login,
      access_level,
      password,
      contract_type,
      salary,
      id_card_date,
      IdFileBase64String,
      IdFileExtension,
    } = req.body;
    let id_file;
    if (IdFileBase64String && IdFileExtension) {
      id_file = globalFunctions.generateUniqueFilename(
        IdFileExtension,
        "teamId"
      );
      let documents = [
        {
          base64String: IdFileBase64String,
          extension: IdFileExtension,
          name: id_file,
        },
      ];
      await teamService.updatedTeam(
        teamId,
        {
          firstName,
          lastName,
          birth_date,
          nationality,
          gender,
          marital_status,
          number_of_childs,
          legal_card,
          address,
          email,
          phone,
          statusTeam,
          login,
          access_level,
          password,
          contract_type,
          salary,
          id_card_date,
          IdFileBase64String,
          IdFileExtension,
          id_file,
        },
        documents
      );
    } else {
      await teamService.updatedTeam(teamId, {
        firstName,
        lastName,
        nameParent,
        card_id,
        country,
        deparment,
        houseStreerNumber,
        email,
        phone,
        statusTeam,
        login,
        password,
        id_creation_date,
      });
    }

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// update password team account
const updatePassword = async (req, res) => {
  try {
    const teamId = req.params.id;
    const { password } = req.body;

    const updateTeam = await teamService.updatePassword(teamId, {
      password,
    });

    if (!updateTeam) {
      return res.status(404).send("Team not found!");
    }
    res.json(updateTeam);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get parent by id
const getTeamById = async (req, res) => {
  try {
    console.log(req)
    const teamId = req.params.id;
    console.log('Team ID:', teamId);

    const getTeam = await teamService.getTeamById(teamId);
    console.log('Result from service:', getTeam);

    if (!getTeam) {
      console.log('Team not found');
      return res.status(404).send('Team not found');
    }

    res.json(getTeam);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

// get all teams
const getAllTeams = async (req, res) => {
  try {
    const teams = await teamService.getTeams();
    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// get teams by email
const getTeamByEmail = async (req, res) => {
  try {
    const teamEmail = req.params.email;

    const getTeam = await teamService.getTeamByEmail(teamEmail);

    if (!getTeam) {
      return res.status(404).send("Team Member not found");
    }
    res.json(getTeam);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
module.exports = {
  registerTeam,
  login,
  logout,
  deleteTeam,
  updateProfile,
  updatePassword,
  getTeamById,
  getTeamByEmail,
  getAllTeams
};