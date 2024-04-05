const Employee = require('../../models/employeeSchema/employeeSchema');


const createEmployee = async (employeeData) => {
    return await Employee.create(employeeData);
};

const findEmployeeByLogin = async (login) => {
    return await Employee.findOne({ login });
};

const getEmployee = async () => {

    return await Employee.find().populate("groupId")
};

const updateEmployee = async (id, updateData) => {
    return await Employee.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteEmployee = async (id) => {
    return await Employee.findByIdAndDelete(id);
};

const getEmployeeById = async (id) => {
    return await Employee.findById(id);
}

const getEmployeeByEmail = async (email) => {
    return await Employee.findOne({ email });
}
const getEmployeeByIdCompany = async (idCompany) => {
    return await Employee.find({idCompany});
}

const updateEmployeePassword = async (id, password) => {
    console.log('Hashed pwd: '+password);
    return await Employee.findByIdAndUpdate({ _id:id }, {
      $set: {
        password: password
      }
    });
  }

  const updateEmployeeGroupId = async (id, group, date) => {
    return await Employee.findByIdAndUpdate({ _id:id }, {
      $set: {
        groupId: group,
        groupJoiningDate:date
      }
    });
  }


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
    updateEmployeeGroupId
};