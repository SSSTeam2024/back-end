const companyService = require("../../services/companyServices/companyService");
const globalFunctions = require("../../utils/globalFunctions");

const addNewCompany = async (req, res) => {
  try {
    const {
      name,
      address,
      email,
      phone,
      activity,
      service_date,
      statusCompany,
      account_name,
      sort_code,
      account_number,
      bank_name,
      login,
      password,
      logoBase64String,
      logoExtension,
      legel_card_base64_string,
      legal_card_extension,
    } = req.body;
    const legalFilesPath = 'files/companyFiles/legalFiles/';
    const logoFilesPath = 'files/companyFiles/logoFiles/';
    let logo_file = globalFunctions.generateUniqueFilename(
      logoExtension,
      "logoCompany"
    );
    let legal_file = globalFunctions.generateUniqueFilename(
      legal_card_extension,
      "LegalCard"
    );

    let documents = [
      {
        base64String: logoBase64String,
        extension: logoExtension,
        name: logo_file,
        path: logoFilesPath
      },
      {
        base64String: legel_card_base64_string,
        extension: legal_card_extension,
        name: legal_file,
        path: legalFilesPath
      }
    ];

    const company = await companyService.createCompany({
      name,
      address,
      email,
      phone,
      activity,
      service_date,
      statusCompany,
      account_name,
      sort_code,
      account_number,
      bank_name,
      login,
      password,
      logo_file,
      legal_file
    }, documents);
    res.json(company);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const loginCompany = async (req, res) => {
  try {
    const { login, password } = req.body;
    const result = await companyService.loginCompany(login, password);
    res.json({ company: result });
  } catch (error) {
    console.error(error);
    res.status(401).send(error.message);
  }
};

//logout school account
const logoutCompany = async (req, res) => {
  let id = req.params.id;

  await companyService.logout(id);

  res.sendStatus(200);
};

const getCompanies = async (req, res) => {
  try {
    const companies = await companyService.getCompanies();
    res.json( companies );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;

    const getCompany = await companyService.getCompanyById(companyId);

    if (!getCompany) {
      return res.status(404).send('Company not found');
    }
    res.json(getCompany);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

// get school by token
const getCompanyByJwtToken = async (req, res) => {
  try {
    const token = req.body.token;

    const getCompany = await companyService.getCompanyByToken(token);

    if (!getCompany) {
      return res.status(404).send("company not found");
    }
    res.json({ company: getCompany });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};


const deleteCompany = async (req, res) => {
  try {
    const companyId = req.params.id;

    const deletedCompany = await companyService.deleteCompany(companyId);

    if (!deletedCompany) {
      return res.status(404).send("School not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateCompany = async (req, res) => {

  try {
    const companyId = req.params.id;
    const {
        name,
        address,
        email,
        phone,
        activity,
        service_date,
        status,
        account_name,
        sort_code,
        account_number,
        bank_name,
        login
        

    } = req.body;

    const updateCompany = await companyService.updateCompany(companyId, {
        name,
        address,
        email,
        phone,
        activity,
        service_date,
        status,
        account_name,
        sort_code,
        account_number,
        bank_name,
        login
    });

    if (!updateCompany) {
      return res.status(404).send('Company not found!');
    }
    res.json(updateCompany);
  } catch (error) {

  }
}

const getCompanyByEmail = async (req, res) => {
  try {
    const companyEmail = req.body.email;
    const getCompanyByEmail = await companyService.getCompanyByEmail(companyEmail);
    if (!getCompanyByEmail) {
      res.status(404).send('Company not found')
    }
    res.json(getCompanyByEmail)
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

const updatePassword = async (req, res) => {
    try {
      const companyId = req.params.id;
      const { 
        password
       } = req.body;
       console.log(req.body)
      const updatedCompany = await companyService.updatePassword(companyId, { 
        password
       });
  
      if (!updatedCompany) {
        return res.status(404).send('Company not found!');
      }
      res.json(updatedCompany);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

module.exports = { addNewCompany, getCompanies,getCompanyByJwtToken, getCompanyById, deleteCompany, updateCompany, getCompanyByEmail,loginCompany, logoutCompany, updatePassword  }