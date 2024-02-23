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

//logout CentralApp account
const logout = (req, res) => {
  res.clearCookie("access_token");
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

module.exports = {
registerCentralApp,
  loginCentralApp,
  logout,
  updateCentralApp,
  updatePassword,
};
