const Company = require('../../models/companySchema/companySchema');


const createCompany = async (companyData) => {
    return await Company.create(companyData);
};

const findCompanyByLogin = async (login) => {
    return await Company.findOne({ login });
};

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


module.exports = {
    createCompany,
    getCompanies,
    updateCompany,
    deleteCompany,
    getCompanyById,
    getCompanyByEmail,
    findCompanyByLogin,
    updatePassword

};