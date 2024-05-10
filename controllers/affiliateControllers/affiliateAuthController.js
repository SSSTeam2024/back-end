const authAffiliate = require("../../services/affiliateServices/affiliateService");
const globalFunctions = require("../../utils/globalFunction");

// register affiliate account
const registerAffiliate = async (req, res) => {
  try {
    const {
      name,
      address,
      email,
      phone,
      category,
      service_date,
      statusAffiliate,
      account_name,
      sort_code,
      account_number,
      bank_name,
      login,
      password,
      api_token,
      id_creation_date,
     // id_file
     number_file,
     insurance_number,
     insurance_date,
     insuranceFileBase64String,
      InsuranceFileExtension,
      notes,
      //insurance_file
      vehicles, 
      fleetNumber,
      enquiryDate,
      coverageDistance,
      coverageArea,
      years_experience,
      website,
      progress,
      IdFileBase64String,
      IdFileExtension,
    } = req.body;

    const licenceFilesPath = 'files/affiliateFiles/licenceFiles/';
    const insuranceFilesPath = 'files/affiliateFiles/insuranceFiles/';
    let id_file = globalFunctions.generateUniqueFilename(
      IdFileExtension,
      "licenceAffiliate"
    );
    let insurance_file = globalFunctions.generateUniqueFilename(
      InsuranceFileExtension,
      "insuranceAffiliate"
    );
    let documents = [
      {
        base64String: IdFileBase64String,
        extension: IdFileExtension,
        name: id_file,
        path: licenceFilesPath
      },
      {
        base64String: insuranceFileBase64String,
        extension: InsuranceFileExtension,
        name: insurance_file,
        path: insuranceFilesPath
      },
    ];

    await authAffiliate.registerAffilate(
      {
        name,
      address,
      email,
      phone,
      category,
      service_date,
      statusAffiliate,
      account_name,
      sort_code,
      account_number,
      bank_name,
      login,
      password,
      api_token,
      id_creation_date,
     // id_file
     number_file,
     insurance_number,
     insurance_date,
      notes,
      //insurance_file
      vehicles, 
      fleetNumber,
      enquiryDate,
      coverageDistance,
      coverageArea,
      years_experience,
      website,
      progress,
      },
      documents
    );
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

//Login Affiliate
const loginAffiliate = async (req, res) => {
  try {
    const { login, password } = req.body;
    const result = await authAffiliate.loginAffiliate(login, password);

    res.json({ affiliate: result });
  } catch (error) {
    console.error(error);
    res.status(401).send(error.message);
  }
};

//logout affiliate account
const logout = async (req, res) => {
  let id = req.params.id;

  await authAffiliate.logout(id);

  res.sendStatus(200);
};

//delete affiliate account
const deleteAffiliate = async (req, res) => {
  try {
    const affiliateId = req.params.id;

    const deletedAffiliate = await authAffiliate.deleteAffiliate(affiliateId);

    if (!deletedAffiliate) {
      return res.status(404).send("Affiliate not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateAffiliate = async (req, res) => {
  try {
    const affiliateId = req.params.id;
    const {
      name,
      address,
      email,
      phone,
      category,
      service_date,
      statusAffiliate,
      account_name,
      sort_code,
      account_number,
      bank_name,
      login,
      password,
      api_token,
      id_creation_date,
     // id_file
     number_file,
     insurance_number,
     insurance_date,
     insuranceFileBase64String,
      InsuranceFileExtension,
      notes,
      //insurance_file
      vehicles, 
      fleetNumber,
      enquiryDate,
      coverageDistance,
      coverageArea,
      years_experience,
      website,
      progress,
      IdFileBase64String,
      IdFileExtension,
    } = req.body;

    const licenceFilesPath = 'files/affiliateFiles/licenceFiles/';
    const insuranceFilesPath = 'files/affiliateFiles/insuranceFiles/';

    let insurance_file = globalFunctions.generateUniqueFilename(InsuranceFileExtension,'AffiliateInsurance');
    let id_file = globalFunctions.generateUniqueFilename(IdFileExtension,'AffiliateImages');

    let documents = [
      {
        base64String: IdFileBase64String,
        extension: IdFileExtension,
        name: id_file,
        path: licenceFilesPath
      },
      {
        base64String: InsuranceFileBase64String,
        extension: InsuranceFileExtension,
        name: insurance_file,
        path: insuranceFilesPath
      },
   
    ];
    const affiliate = await authAffiliate.updateAffiliate(affiliateId, {
      name,
      address,
      email,
      phone,
      category,
      service_date,
      statusAffiliate,
      account_name,
      sort_code,
      account_number,
      bank_name,
      login,
      password,
      api_token,
      id_creation_date,
     // id_file
     number_file,
     insurance_number,
     insurance_date,
      notes,
      //insurance_file
      vehicles, 
      fleetNumber,
      enquiryDate,
      coverageDistance,
      coverageArea,
      years_experience,
      website,
      progress,
    },documents);
    res.status(200).json(affiliate);

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get affiliate by id
const getAffiliateById = async (req, res) => {
  try {
    const affiliateId = req.params.id;

    const getAffiliate = await authAffiliate.getAffiliateById(affiliateId);

    if (!getAffiliate) {
      return res.status(404).send("Affiliate not found");
    }
    res.json(getAffiliate);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get affiliate by token
const getAffiliateByJwtToken = async (req, res) => {
  try {
    const token = req.body.token;

    const getAffiliate = await authAffiliate.getAffiliateByToken(token);

    if (!getAffiliate) {
      return res.status(404).send("Affiliate not found");
    }
    res.json({ affiliate: getAffiliate });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get all affiliates
const getAffiliates = async (req, res) => {
  try {
    const affiliates = await authAffiliate.getAffiliates();
    res.json( affiliates );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// update password school account
const updatePassword = async (req, res) => {
  try {
    const affiliateId = req.params.id;
    const { password } = req.body;

    const updateAffiliate = await authAffiliate.updatePassword(affiliateId, {
      password,
    });

    if (!updateAffiliate) {
      return res.status(404).send("Affiliate not found!");
    }
    res.json(updateAffiliate);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};


const sendAcceptenceEmail = async (req, res) => {
  try {
    const {
      id,
      login,
      password,
      service_date,
    } = req.body;
    const sentResult = await authAffiliate.sendAcceptenceEmail({
      id,
      login,
      password,
      service_date,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const sendRefuseEmail = async (req, res) => {
  try {
    const {
      id_aff,
    } = req.body;
    console.log(req.body)
    const sentResult = await authAffiliate.sendRefuseEmail({
      id_aff,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAffiliates,
  getAffiliateByJwtToken,
  logout,
  getAffiliateById,
  updateAffiliate,
  deleteAffiliate,
  loginAffiliate,
  updatePassword,
  registerAffiliate,
  sendAcceptenceEmail,
  sendRefuseEmail
};