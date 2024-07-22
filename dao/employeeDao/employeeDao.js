const Employee = require("../../models/employeeSchema/employeeSchema");

const createEmployee = async (employeeData) => {
  return await Employee.create(employeeData);
};

const findEmployeeByLogin = async (login) => {
  return await Employee.findOne({ login });
};

const getEmployee = async () => {
  return await Employee.find().populate("groupId");
};

const updateEmployee = async (id, updateData) => {
  console.log("id dao", id);
  console.log("updateData dao", updateData);
  return await Employee.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteEmployee = async (id) => {
  return await Employee.findByIdAndDelete(id);
};

const getEmployeeById = async (id) => {
  return await Employee.findById(id).populate("groupId").populate("idCompany");
};

const getEmployeeByEmail = async (email) => {
  return await Employee.findOne({ email });
};
const getEmployeeByIdCompany = async (id) => {
  const query = {
    idCompany: id,
  };
  return await Employee.find(query);
};

const updateEmployeePassword = async (id, password) => {
  return await Employee.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        password: password,
      },
    }
  );
};

const updateEmployeeGroupId = async (id, group, date) => {
  return await Employee.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        groupId: group,
        groupJoiningDate: date,
      },
    }
  );
};

const updateJwtToken = async (id, token) => {
  return await Employee.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        api_token: token,
      },
    }
  );
};

// logout
const logout = async (id) => {
  return await Employee.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        api_token: "",
      },
    }
  );
};

const updateEmployeeStop = async (data) => {
  return await Employee.findByIdAndUpdate(
    { _id: data.employee },
    {
      $set: {
        stop_point: data.stop,
      },
    },
    { new: true }
  );
};

module.exports = {
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeById,
  getEmployeeByEmail,
  findEmployeeByLogin,
  updateEmployeePassword,
  getEmployeeByIdCompany,
  updateEmployeeGroupId,
  updateJwtToken,
  logout,
  updateEmployeeStop,
};
