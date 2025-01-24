const vehiclesClassComponentDao = require("../../dao/vehiclesClassComponentDao/vehiclesClassComponentDao");

const createVehiclesClass = async (vehiclesClassData) => {
  return await vehiclesClassComponentDao.createVehiclesClass(vehiclesClassData);
};

const getVehiclesClass = async () => {
  return await vehiclesClassComponentDao.getVehiclesClass();
};

const updateVehiclesClass = async (id, updateData) => {
  return await vehiclesClassComponentDao.updateVehiclesClass(id, updateData);
};

const deleteVehiclesClass = async (id) => {
  return await vehiclesClassComponentDao.deleteVehiclesClass(id);
};

const addTabToVehiclesClass = async (valueId, tabData) => {
  const newTab = {
    title: tabData.title,
    link: tabData.link,
    icon: tabData.icon,
    display: tabData.display,
  };

  return await vehiclesClassComponentDao.addTabToVehiclesClass(valueId, newTab);
};

const getVehicleClassById = async (id) => {
  return await vehiclesClassComponentDao.getVehiclesClassById(id);
};

module.exports = {
  createVehiclesClass,
  getVehiclesClass,
  updateVehiclesClass,
  deleteVehiclesClass,
  addTabToVehiclesClass,
  getVehicleClassById,
};
