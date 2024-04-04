const authCentralApp = require("../../services/authCentralAppServices/authCentralAppServices");
const globalFunctions = require("../../utils/globalFunction");

// register CentralApp account
const registerCentralApp = async (req, res) => {
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
    } = req.body;

    let id_file = globalFunctions.generateUniqueFilename(
      IdFileExtension,
      "logoCentralApp"
    );

    let documents = [
      {
        base64String: IdFileBase64String,
        extension: IdFileExtension,
        name: id_file,
      },
    ];

    await authCentralApp.registerCentralApp(
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
      },
      documents
    );
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

//Login CentralApp account
const loginCentralApp = async (req, res) => {
  try {
    const { login, password } = req.body;
    const result = await authCentralApp.loginCentralApp(login, password);

    res.json({ central: result });
  } catch (error) {
    console.error(error);
    res.status(401).send(error.message);
  }
};

//logout CentralApp account
const logout = async (req, res) => {
  let id = req.params.id;

  await authCentralApp.logout(id);

  res.sendStatus(200);
};
// update CentralApp profile
const updateCentralApp = async (req, res) => {
  try {
    const centralAppId = req.params.id;
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
        "logoCentralApp"
      );
      let documents = [
        {
          base64String: IdFileBase64String,
          extension: IdFileExtension,
          name: id_file,
        },
      ];
      await authCentralApp.updatedCentralApp(
        centralAppId,
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
      await authCentralApp.updatedCentralApp(centralAppId, {
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

// update password centralApp account
const updatePassword = async (req, res) => {
  try {
    const centralAppId = req.params.id;
    const { password } = req.body;

    const updateCentralApp = await authCentralApp.updatePassword(centralAppId, {
      password,
    });

    if (!updateCentralApp) {
      return res.status(404).send("Central App not found!");
    }
    res.json(updateCentralApp);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get account by token
const getCentralAppByJwtToken = async (req, res) => {
  try {
    const token = req.body.token;

    const getCentral = await authCentralApp.getCentralAppByToken(token);

    if (!getCentral) {
      return res.status(404).send("Account not found");
    }
    res.json({ central: getCentral });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get account by id
const getAccountById = async (req, res) => {
  try {
    const accountId = req.params.id;

    const getAccount = await authCentralApp.getCentralAppById(accountId);

    if (!getAccount) {
      return res.status(404).send("Account not found");
    }
    res.json(getAccount);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  registerCentralApp,
  loginCentralApp,
  logout,
  updateCentralApp,
  updatePassword,
  getCentralAppByJwtToken,
  getAccountById,
};
