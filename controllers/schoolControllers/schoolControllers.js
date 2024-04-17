const authShool = require("../../services/schoolServices/authSchool");
const globalFunctions = require("../../utils/globalFunction");

// register school account
const registerSchool = async (req, res) => {
  try {
    const {
      name,
      login,
      password,
      email,
      phone,
      activity,
      address,
      service_date,
      status,
      legal_status,
      account_name,
      corporateCategory,
      contract,
      sort_code,
      account_number,
      bank_name,
      id_creation_date,
      IdFileBase64String,
      IdFileExtension,
      api_token,
      program_status,
      total_price,
      clientID,
      unit_price,
      notes_for_client,
    } = req.body;

    let id_file = globalFunctions.generateUniqueFilename(
      IdFileExtension,
      "logoSchool"
    );

    let documents = [
      {
        base64String: IdFileBase64String,
        extension: IdFileExtension,
        name: id_file,
      },
    ];

    await authShool.registerSchool(
      {
        name,
        login,
        password,
        email,
        phone,
        activity,
        address,
        service_date,
        status,
        legal_status,
        account_name,
        corporateCategory,
        contract,
        sort_code,
        account_number,
        bank_name,
        id_creation_date,
        id_file,
        api_token,
        program_status,
        total_price,
        clientID,
        unit_price,
        notes_for_client,
      },
      documents
    );
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

//Login school account
const loginSchool = async (req, res) => {
  try {
    const { login, password } = req.body;
    const result = await authShool.loginSchool(login, password);

    res.json({ school: result });
  } catch (error) {
    console.error(error);
    res.status(401).send(error.message);
  }
};

//logout school account
const logout = async (req, res) => {
  let id = req.params.id;

  await authShool.logout(id);

  res.sendStatus(200);
};
//delete school account
const deleteSchool = async (req, res) => {
  try {
    const schoolId = req.params.id;

    const deletedSchool = await authShool.deleteSchool(schoolId);

    if (!deletedSchool) {
      return res.status(404).send("School not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// update school profile
const updateSchool = async (req, res) => {
  try {
    const schoolId = req.params.id;
    const {
      name,
      login,
      password,
      email,
      phone,
      activity,
      address,
      service_date,
      status,
      legal_status,
      account_name,
      corporateCategory,
      contract,
      sort_code,
      account_number,
      bank_name,
      id_creation_date,
      IdFileBase64String,
      IdFileExtension,
    } = req.body;
    let id_file;
    if (IdFileBase64String && IdFileExtension) {
      id_file = globalFunctions.generateUniqueFilename(
        IdFileExtension,
        "logoSchool"
      );
      let documents = [
        {
          base64String: IdFileBase64String,
          extension: IdFileExtension,
          name: id_file,
        },
      ];
      await authShool.updatedSchool(
        schoolId,
        {
          name,
          login,
          password,
          email,
          phone,
          activity,
          address,
          service_date,
          status,
          legal_status,
          account_name,
          corporateCategory,
          contract,
          sort_code,
          account_number,
          bank_name,
          id_creation_date,
          id_file,
        },
        documents
      );
    } else {
      await authShool.updatedSchool(schoolId, {
        firstName,
        lastName,
        nameParent,
        card_id,
        country,
        deparment,
        houseStreerNumber,
        classStudent,
        dateBirth,
        email,
        phone,
        status,
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
// get school by id
const getSchoolById = async (req, res) => {
  try {
    const schoolId = req.params.id;

    const getSchool = await authShool.getSchoolById(schoolId);

    if (!getSchool) {
      return res.status(404).send("School not found");
    }
    res.json(getSchool);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get school by token
const getSchoolByJwtToken = async (req, res) => {
  try {
    const token = req.body.token;

    const getSchool = await authShool.getSchoolByToken(token);

    if (!getSchool) {
      return res.status(404).send("School not found");
    }
    res.json({ school: getSchool });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get all schools
const getAllSchools = async (req, res) => {
  try {
    const schools = await authShool.getSchools();
    res.json( schools );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// update password school account
const updatePassword = async (req, res) => {
  try {
    const schoolId = req.params.id;
    const { password } = req.body;

    const updateSchool = await authShool.updatePassword(schoolId, {
      password,
    });

    if (!updateSchool) {
      return res.status(404).send("School not found!");
    }
    res.json(updateSchool);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  registerSchool,
  loginSchool,
  logout,
  deleteSchool,
  updateSchool,
  getSchoolById,
  getAllSchools,
  updatePassword,
  getSchoolByJwtToken,
};