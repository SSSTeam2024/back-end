const affiliateService = require('../../services/affiliateServices/affiliateService');
const globalFunctions = require('../../utils/globalFunctions');

const register = async (req, res) => {
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
      id_creation_date,
      cardIdBase64String,
      cardIdExtension,
      license_id,
      license_date,
      licenseIdBase64String,
      licenseIdExtension 
    } = req.body;

    let id_file = globalFunctions.generateUniqueFilename(cardIdExtension,'cardId');
    let license_file = globalFunctions.generateUniqueFilename(licenseIdExtension,'licenseId');

    let documents = [
      {
        base64String: cardIdBase64String,
        extension: cardIdExtension,
        name: id_file
      },
      {
        base64String: licenseIdBase64String,
        extension: licenseIdExtension,
        name: license_file
      }
    ];
    
    await affiliateService.registerAffilate({ 
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
      id_file,
      license_id,
      license_date,
      license_file
     },documents);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { login, password } = req.body;
    const result = await affiliateService.loginAffiliate(login, password);
    res.cookie('access_token', result.accessToken, { httpOnly: true, secure: true });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(401).send(error.message);
  }
};

const logout = (req, res) => {
  res.clearCookie('access_token');
  res.sendStatus(200);
};

const updateProfile = async (req, res) => {
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
      id_number,
      id_creation_date,
      license_id,
      license_date,
     } = req.body;

    const updateAffiliate = await affiliateService.updateAffiliate(affiliateId, { 
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
      id_number,
      id_creation_date,
      license_id,
      license_date,
     });

    if (!updateAffiliate) {
      return res.status(404).send('Affiliate not found!');
    }
    res.json(updateAffiliate);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getById = async (req, res) => {
  try {
    const affiliateId = req.params.id;

    const getAffiliate = await affiliateService.getAffiliateById(affiliateId);

    if (!getAffiliate) {
      return res.status(404).send('Affiliate not found');
    }
    res.json(getAffiliate);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

const getAffiliates = async (req, res) => {
  try {
    const affiliates = await affiliateService.getAffiliates();
    res.json({ affiliates });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteAffilate = async (req, res) => {
  try {
    const affiliateId = req.params.id;

    const deletedAffilate = await affiliateService.deleteAffiliate(affiliateId);

    if (!deletedAffilate) {
      return res.status(404).send('Affiliate not found');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getByEmail = async (req, res) => {
  try {
    const affiliateEmail = req.body.email;

    const getAffiliate = await affiliateService.getAffiliateByEmail(affiliateEmail);

    if (!getAffiliate) {
      return res.status(404).send('Affiliate not found');
    }
    res.json(getAffiliate);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updatePassword = async (req, res) => {
  try {
    const affiliateId = req.params.id;
    const { 
      password
     } = req.body;

    const updateAffiliate = await affiliateService.updatePassword(affiliateId, { 
      password
     });

    if (!updateAffiliate) {
      return res.status(404).send('Affiliate not found!');
    }
    res.json(updateAffiliate);
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
  getAffiliates,
  deleteAffilate,
  getByEmail,
  updatePassword
};
