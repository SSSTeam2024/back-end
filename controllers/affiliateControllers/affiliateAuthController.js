const authService = require('../services/affiliateAuthService');

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
    const result = await authService.loginUser(login, password);
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
      password,
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
      password,
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

module.exports = {
  register,
  login,
  logout,
  updateProfile
};
