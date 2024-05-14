const Affiliate = require('../../models/affiliateModels/affiliate');

const createAffiliate = async (affiliate) => {
  return await Affiliate.create(affiliate);
};

const getAffiliates = async () => {
  return await Affiliate.find().populate("vehicles")
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
  return await Affiliate.findById(id).populate("vehicles")
}

const getAffiliateByEmail = async (email) => {
  return await Affiliate.findOne({ email });
}

const updatePassword = async (id, password) => {
  return await Affiliate.findByIdAndUpdate({ _id:id }, {
    $set: {
      password: password
    }
  });
}

const updateAffiliateStatus = async (id,login, password, service_date) => {
  let affiliateStatus = "Accepted";
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

const refuseAffiliate = async (id) => {
  let affiliateStatus = "Refused";
  return await Affiliate.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        statusAffiliate: affiliateStatus,
      },
    }
  );
};

// find affiliate by token
const findAffiliateByToken = async (token) => {
  let api_token = token;
  return await Affiliate.findOne({ api_token });
};

 // logout
 const logout = async (id) => {
  return await Affiliate.findByIdAndUpdate({ _id:id }, {
    $set: {
      api_token: ""
    }
  });
}

const updateJwtToken = async (id, token) => {
  return await Affiliate.findByIdAndUpdate({ _id:id }, {
    $set: {
      api_token: token
    }
  });
}

// find affiliate by login
const findAffiliateByUsername = async (login) => {
  return await Affiliate.findOne({ login });
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
  updateAffiliateStatus,
  refuseAffiliate,
  logout,
  findAffiliateByToken,
  updateJwtToken, 
  findAffiliateByUsername
};
