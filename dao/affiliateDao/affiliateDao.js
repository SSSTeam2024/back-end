const Affiliate = require('../../models/affiliateModels/affiliate');

const createAffiliate = async (affiliate) => {
  return await Affiliate.create(affiliate);
};

const getAffiliates = async () => {
  return await Affiliate.find();
};

const updateAffiliate = async (id, updateData) => {
  return await Affiliate.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteAffiliate = async (id) => {
  return await Affiliate.findByIdAndDelete(id);
};

const findAffiliateByLogin = async (login) => {
  return await Affiliate.findOne({ login });
};

const getAffiliateById = async (id) => {
  return await Affiliate.findById(id);
}

const getAffiliateByEmail = async (email) => {
  return await Affiliate.findOne({ email });
}

const updatePassword = async (id, password) => {
  console.log('Hashed pwd: '+password);
  return await Affiliate.findByIdAndUpdate({ _id:id }, {
    $set: {
      password: password
    }
  });
}

const updateAffiliateStatus = async (id,login, password, service_date) => {
  let affiliateStatus = "Accepted";
  console.log("DAO: id", id)
  console.log("DAO: login", login)
  console.log("DAO: password", password)
  console.log("DAO: service_date", service_date)
  return await Affiliate.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        statusAffiliate: affiliateStatus,
        login:login,
        password:password,
        service_date:service_date
      },
    }
  );
};

module.exports = {
  createAffiliate,
  getAffiliates,
  updateAffiliate,
  deleteAffiliate,
  findAffiliateByLogin,
  getAffiliateById,
  getAffiliateByEmail,
  updatePassword,
  updateAffiliateStatus
};
