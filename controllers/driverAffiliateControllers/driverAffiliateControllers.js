const driverAffiliateService = require("../../services/affiliateDriversServices/affiliateDriversServices");
const globalFunctions = require("../../utils/globalFunctions");

const registerDriverAffiliate = async (req, res) => {
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
      affilaite_reference_id,
    } = req.body;

    const licenseFilesPath = "files/driverAffiliateFiles/licenseFiles/";
    const dqcFilesPath = "files/driverAffiliateFiles/dqcFiles/";
    const dbsCheckFilesPath = "files/driverAffiliateFiles/dbsCheckFiles/";
    const contractFilesPath = "files/driverAffiliateFiles/contractFiles/";
    const profileImagesPath = "files/driverAffiliateFiles/profileImages/";

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

    const driverAffiliate = await driverAffiliateService.createDriverAffiliate(
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
        affilaite_reference_id,
      },
      documents
    );
    res.json(driverAffiliate);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateDriverAffiliate = async (req, res) => {
  try {
    const driverAffiliateId = req.params.id;
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
      affilaite_reference_id,
    } = req.body;

    const licenseFilesPath = "files/driverAffiliateFiles/licenseFiles/";
    const dqcFilesPath = "files/driverAffiliateFiles/dqcFiles/";
    const dbsCheckFilesPath = "files/driverAffiliateFiles/dbsCheckFiles/";
    const contractFilesPath = "files/driverAffiliateFiles/contractFiles/";
    const profileImagesPath = "files/driverAffiliateFiles/profileImages/";

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

    let driverBody = {
      username,
      password,
      email,

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

      driving_license_expiry,

      dqc_expiry,

      dbs_issue_date,
      dbs_badge_date,
      pvc_expiry,

      deposti_held,
      notes,
      affilaite_reference_id,
    };

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

    if (documents[0].base64String != undefined) {
      driverBody.driver_license = documents[0].name;
    }
    if (documents[1].base64String != undefined) {
      driverBody.dqc = documents[1].name;
    }
    if (documents[2].base64String != undefined) {
      driverBody.dbscheck = documents[2].name;
    }
    if (documents[3].base64String != undefined) {
      driverBody.contract = documents[3].name;
    }
    if (documents[4].base64String != undefined) {
      driverBody.profile_image = documents[4].name;
    }

    const driver = await driverAffiliateService.updateAffiliateDriver(
      driverAffiliateId,
      driverBody,
      documents
    );

    res.status(200).json(driver);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getDiverAffiliateById = async (req, res) => {
  try {
    const driverAffiliateId = req.params.id;

    const getDriverAffiliate =
      await driverAffiliateService.getAffiliateDriverById(driverAffiliateId);

    if (!getDriverAffiliate) {
      return res.status(404).send("Affiliates Driver not found");
    }
    res.json(getDriverAffiliate);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAffiliateDrivers = async (req, res) => {
  try {
    const affiliate_id = req.params.id;
    const drivers = await driverAffiliateService.getAffiliateDrivers(
      affiliate_id
    );
    res.json(drivers);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteAffiliateDriver = async (req, res) => {
  try {
    const driverId = req.params.id;

    const deletedAffilate = await driverAffiliateService.deleteAffiliateDriver(
      driverId
    );

    if (!deletedAffilate) {
      return res.status(404).send("Affiliates Driver not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAffiliateDriverByEmail = async (req, res) => {
  try {
    const driverEmail = req.body.email;

    const getDriver = await driverAffiliateService.getAffiliateDriverByEmail(
      driverEmail
    );

    if (!getDriver) {
      return res.status(404).send("Affiliates Driver not found");
    }
    res.json(getDriver);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  registerDriverAffiliate,
  updateDriverAffiliate,
  getDiverAffiliateById,
  getAffiliateDrivers,
  deleteAffiliateDriver,
  getAffiliateDriverByEmail,
};
