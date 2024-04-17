const driverService = require("../../services/driverServices/driverService");
const globalFunctions = require("../../utils/globalFunctions");

const register = async (req, res) => {
  try {
    const {
      username,
      password,
      email,
      profile_image_base64_string,
      profile_image_extension,
      firstname,
      surname,
      birthdate,
      jobtype,
      joindate,
      address,
      city,
      driverStatus,
      state,
      country,
      postalcode,
      language,
      nationality,
      phonenumber,
      emergency_contact,
      //
      bank_name,
      account_name,
      account_number,
      sort_code,
      //
      driver_license_base64_string,
      driver_license_extension,
      driving_license_expiry,
      dqc_base64_string,
      dqc_extension,
      dqc_expiry,
      dbscheck_base64_string,
      dbscheck_extension,
      dbs_issue_date,
      dbs_badge_date,
      pvc_expiry,
      contract_base64_string,
      contract_extension,
      deposti_held,
      notes,
    } = req.body;

    const licenseFilesPath = "files/driverFiles/licenseFiles/";
    const dqcFilesPath = "files/driverFiles/dqcFiles/";
    const dbsCheckFilesPath = "files/driverFiles/dbsCheckFiles/";
    const contractFilesPath = "files/driverFiles/contractFiles/";
    const profileImagesPath = "files/driverFiles/profileImages/";

    let driver_license = globalFunctions.generateUniqueFilename(
      driver_license_extension,
      "drivingLicense"
    );
    let dqc = globalFunctions.generateUniqueFilename(dqc_extension, "DQC");
    let dbscheck = globalFunctions.generateUniqueFilename(
      dbscheck_extension,
      "dbsCheck"
    );
    let contract = globalFunctions.generateUniqueFilename(
      contract_extension,
      "contract"
    );
    let profile_image = globalFunctions.generateUniqueFilename(
      profile_image_extension,
      "profileImg"
    );

    let documents = [
      {
        base64String: driver_license_base64_string,
        extension: driver_license_extension,
        name: driver_license,
        path: licenseFilesPath,
      },
      {
        base64String: dqc_base64_string,
        extension: dqc_extension,
        name: dqc,
        path: dqcFilesPath,
      },
      {
        base64String: dbscheck_base64_string,
        extension: dbscheck_extension,
        name: dbscheck,
        path: dbsCheckFilesPath,
      },
      {
        base64String: contract_base64_string,
        extension: contract_extension,
        name: contract,
        path: contractFilesPath,
      },
      {
        base64String: profile_image_base64_string,
        extension: profile_image_extension,
        name: profile_image,
        path: profileImagesPath,
      },
    ];

    const driver = await driverService.registerDriver(
      {
        username,
        password,
        email,
        profile_image,
        firstname,
        surname,
        birthdate,
        jobtype,
        joindate,
        address,
        city,
        driverStatus,
        state,
        country,
        postalcode,
        language,
        nationality,
        phonenumber,
        emergency_contact,
        //
        bank_name,
        account_name,
        account_number,
        sort_code,
        //
        driver_license,
        driving_license_expiry,
        dqc,
        dqc_expiry,
        dbscheck,
        dbs_issue_date,
        dbs_badge_date,
        pvc_expiry,
        contract,
        deposti_held,
        notes,
      },
      documents
    );
    res.json(driver);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await driverService.loginDriver(email, password);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(401).send(error.message);
  }
};

const logout = async (req, res) => {
  let id = req.params.id;

  await driverService.logout(id);
  res.send({ result: "Successfully logged out" });
};

// get school by token
const getDriverByJwtToken = async (req, res) => {
  try {
    const token = req.body.token;

    const getDriver = await driverService.getDriverByToken(token);

    if (!getDriver) {
      return res.status(404).send("Driver not found");
    }
    res.json(getDriver);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateProfile = async (req, res) => {
  try {
    const driverId = req.params.id;
    const {
      username,
      email,
      firstname,
      surname,
      birthdate,
      jobtype,
      joindate,
      address,
      city,
      state,
      country,
      postalcode,
      language,
      nationality,
      phonenumber,
      emergency_contact,
      //
      bank_name,
      account_name,
      account_number,
      sort_code,
      //
      driving_license_expiry,
      dqc_expiry,
      dbs_issue_date,
      dbs_badge_date,
      pvc_expiry,
      deposti_held,
      notes,
    } = req.body;

    const updatedDriver = await driverService.updateDriver(driverId, {
      username,
      email,
      firstname,
      surname,
      birthdate,
      jobtype,
      joindate,
      address,
      city,
      state,
      country,
      postalcode,
      language,
      nationality,
      phonenumber,
      emergency_contact,
      //
      bank_name,
      account_name,
      account_number,
      sort_code,
      //
      driving_license_expiry,
      dqc_expiry,
      dbs_issue_date,
      dbs_badge_date,
      pvc_expiry,
      deposti_held,
      notes,
    });

    if (!updatedDriver) {
      return res.status(404).send("Driver not found!");
    }
    res.json(updatedDriver);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getById = async (req, res) => {
  try {
    const driverId = req.params.id;

    const getDriver = await driverService.getDriverById(driverId);

    if (!getDriver) {
      return res.status(404).send("Driver not found");
    }
    res.json(getDriver);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getDrivers = async (req, res) => {
  try {
    const drivers = await driverService.getDrivers();
    res.json(drivers);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteDriver = async (req, res) => {
  try {
    const driverId = req.params.id;

    const deletedAffilate = await driverService.deleteDriver(driverId);

    if (!deletedAffilate) {
      return res.status(404).send("Driver not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getByEmail = async (req, res) => {
  try {
    const driverEmail = req.body.email;

    const getDriver = await driverService.getDriverByEmail(driverEmail);

    if (!getDriver) {
      return res.status(404).send("Driver not found");
    }
    res.json(getDriver);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updatePassword = async (req, res) => {
  try {
    const driverId = req.params.id;
    const { password } = req.body;

    const updateDriver = await driverService.updatePassword(driverId, {
      password,
    });

    if (!updateDriver) {
      return res.status(404).send("Driver not found!");
    }
    res.json(updateDriver);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  register,
  login,
  logout,
  updateProfile,
  getById,
  getDrivers,
  deleteDriver,
  getByEmail,
  updatePassword,
  getDriverByJwtToken,
};
