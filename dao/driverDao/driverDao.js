const Driver = require('../../models/driverModels/driver');

const createDriver = async (driver) => {
  return await Driver.create(driver);
};

const getDrivers = async () => {
  return await Driver.find();
};

const updateDriver = async (id, updateData) => {
  return await Driver.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteDriver = async (id) => {
  return await Driver.findByIdAndDelete(id);
};

const findDriverByLogin = async (username) => {
  return await Driver.findOne({ username });
};

const getDriverById = async (id) => {
  return await Driver.findById(id);
}

const getDriverByEmail = async (email) => {
  return await Driver.findOne({ email });
}

const updatePassword = async (id, password) => {
  console.log('Hashed pwd: '+password);
  return await Driver.findByIdAndUpdate({ _id:id }, {
    $set: {
      password: password
    }
  });
}

module.exports = {
  createDriver,
  getDrivers,
  updateDriver,
  deleteDriver,
  findDriverByLogin,
  getDriverById,
  getDriverByEmail,
  updatePassword
};
