const Affiliate = require('../../models/affiliateModels/affiliate');

//create affiliate
const createAffiliate = async (affiliateData) => {
  return await Affiliate.create(affiliateData);
};
// find affiliate by login
const findAffiliateByUsername = async (login) => {
  return await Affiliate.findOne({ login });
};

// find affiliate by token
const findAffiliateByToken = async (token) => {
  let api_token = token;
  return await Affiliate.findOne({ api_token });
};


// delete affiliate 

const deleteAffiliate = async (id) => {
  return await Affiliate.findByIdAndDelete(id);
};

// updateAffiliate profile
const updateAffiliate= async (id, updateData) => {
  console.log("DAO", updateData)
  return await Affiliate.findByIdAndUpdate(id, updateData, { new: true });
};

// get Affiliate by id
const getAffiliateById = async (id) => {
  return await Affiliate.findById(id);
}

// get all Affiliates
const getAllAffiliates = async () => {
  return await Affiliate.find({});
};
const updateJwtToken = async (id, token) => {
  return await Affiliate.findByIdAndUpdate({ _id:id }, {
    $set: {
      api_token: token
    }
  });
}

  // update password
  const updatePassword = async (id, password) => {
    console.log('Hashed pwd: '+password);
    return await Affiliate.findByIdAndUpdate({ _id:id }, {
      $set: {
        password: password
      }
    });
  }

    // logout
    const logout = async (id) => {
      return await Affiliate.findByIdAndUpdate({ _id:id }, {
        $set: {
          api_token: ""
        }
      });
    }


module.exports = {
    getAllAffiliates,
    getAffiliateById,
    updateAffiliate,
    deleteAffiliate,
    findAffiliateByToken,
    findAffiliateByUsername,
    updateJwtToken,
    updatePassword,
    createAffiliate,
    logout
};