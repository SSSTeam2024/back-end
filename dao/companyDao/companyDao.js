const Company = require('../../models/companySchema/companySchema');


const createCompany = async (companyData) => {
    return await Company.create(companyData);
};

const findCompanyByLogin = async (login) => {
    return await Company.findOne({ login });
};

// find Company by token
const findCompanyByToken = async (token) => {
    let api_token = token;
    return await Company.findOne({ api_token });
  };

  const updateJwtToken = async (id, token) => {
    return await Company.findByIdAndUpdate({ _id:id }, {
      $set: {
        api_token: token
      }
    });
  }


const getCompanies = async () => {
    return await Company.find();
};

const updateCompany = async (id, updateData) => {
    return await Company.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteCompany = async (id) => {
    return await Company.findByIdAndDelete(id);
};

const getCompanyById = async (id) => {
    return await Company.findById(id);
}

const getCompanyByEmail = async (email) => {
    return await Company.findOne({ email });
}
const updatePassword = async (id, password) => {
    console.log('Hashed pwd: '+password);
    return await Company.findByIdAndUpdate({ _id:id }, {
      $set: {
        password: password
      }
    });
  }

// logout
    const logout = async (id) => {
        return await Company.findByIdAndUpdate({ _id:id }, {
          $set: {
            api_token: ""
          }
        });
      }

module.exports = {
    createCompany,
    getCompanies,
    updateCompany,
    deleteCompany,
    getCompanyById,
    getCompanyByEmail,
    findCompanyByLogin,
    updatePassword,
    findCompanyByToken,
    updateJwtToken,
    logout
};