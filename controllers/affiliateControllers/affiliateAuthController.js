const authAffiliate = require("../../services/affiliateServices/affiliateService");
const { calculateProgress } = require("../../utils/calculateProgress");
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
      region,
      service_date,
      status,
      account_name,
      sort_code,
      account_number,
      bank_name,
      login,
      password,
      id_number,
      api_token,
      license_id,
      license_date,
      license_file,
      vehicles, 
      progress,

      insurance_date,
      insurance_number,
      insuranceFileBase64String,
      InsuranceFileExtension,

      id_creation_date,
      number_file,
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

    await authAffiliate.registerAffiliate(
      {
        name,
        address,
        email,
        phone,
        category,
        region,
        service_date,
        status,
        account_name,
        sort_code,
        account_number,
        bank_name,
        login,
        password,
        id_number,
        id_creation_date,
        license_id,
        api_token,
        license_date,
        license_file,
        vehicles,
        progress,
        insurance_date,
        number_file,     
        insurance_number,
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
// update Affiliate profile
// const updateAffiliate = async (req, res) => {
//   try {
//     const affiliateId = req.params.id;
//     const {
//       name,
//       address,
//       email,
//       phone,
//       category,
//       region,
//       service_date,
//       status,
//       account_name,
//       sort_code,
//       account_number,
//       bank_name,
//       login,
//       password,
//       id_number,
//       id_creation_date,
//       license_id,
//       license_date,
//       license_file,
//       vehicles,
//       IdFileBase64String,
//       IdFileExtension,
//     } = req.body;
//     console.log(req.body)
//     let id_file;
//     if (IdFileBase64String && IdFileExtension) {
//       id_file = globalFunctions.generateUniqueFilename(
//         IdFileExtension,
//         "logoAffiliate"
//       );
//       let documents = [
//         {
//           base64String: IdFileBase64String,
//           extension: IdFileExtension,
//           name: id_file,
//         },
//       ];
//       await authAffiliate.updatedAffiliate(
//         affiliateId,
//         {
//           name,
//           address,
//           email,
//           phone,
//           category,
//           region,
//           service_date,
//           status,
//           account_name,
//           sort_code,
//           account_number,
//           bank_name,
//           login,
//           password,
//           id_number,
//           id_creation_date,
//           license_id,
//           license_date,
//           license_file,
//           vehicles,
//           id_file
//         },
//         documents
//       );
//     } else {
//       await authAffiliate.updatedAffiliate(affiliateId, {
//         name,
//         address,
//         email,
//         phone,
//         category,
//         region,
//         service_date,
//         status,
//         account_name,
//         sort_code,
//         account_number,
//         bank_name,
//         login,
//         password,
//         id_number,
//         id_creation_date,
//         license_id,
//         license_date,
//         license_file,
//         vehicles,
//         id_file
//       });
//     }
//     console.log(id_file)
//     res.sendStatus(200);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

const updateAffiliate = async (req, res) => {
  try {
    const affiliateId = req.params.id;
    const {
      name,
      address,
      email,
      phone,
      category,
      region,
      service_date,
      status,
      account_name,
      sort_code,
      account_number,
      bank_name,
      login,
      password,
      id_number,
      api_token,
      license_id,
      license_date,
      license_file,
      vehicles, 
      progress,
      insurance_date,
      insurance_number,
      id_creation_date,
      number_file,
      IdFileBase64String,
      IdFileExtension,
      InsuranceFileBase64String,
      InsuranceFileExtension,
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
    console.log("extension id",IdFileExtension)
    console.log("extension insurance",InsuranceFileExtension)
    const affiliate = await authAffiliate.updatedAffiliate(affiliateId, {
      name,
      address,
      email,
      phone,
      category,
      region,
      service_date,
      status,
      account_name,
      sort_code,
      account_number,
      bank_name,
      login,
      password,
      id_number,
      id_creation_date,
      license_id,
      api_token,
      license_date,
      license_file,
      vehicles,
      progress,
      insurance_date,
      insurance_number,     
      number_file,
      insurance_file,
      id_file
    },documents);
    console.log("affiliate controller",affiliate)
    res.json(affiliate);


    // After updating the affiliate's information and calculating the progress
    // const updatedAffiliateData = await authAffiliate.getAffiliateById(
    //   affiliateId
    // );
    // console.log(updatedAffiliateData)
    // const progressStatus = calculateProgress(updatedAffiliateData);
    // await authAffiliate.updatedAffiliate(affiliateId, { progressStatus });

    // Send response with progress included
    // res.status(200).json({ message: "OK"});
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
    res.json({ affiliates });
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
};
