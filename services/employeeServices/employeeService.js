const employeeDao =require("../../dao/employeeDao/employeeDao")
const fs = require("fs").promises;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employee = require ("../../models/employeeSchema/employeeSchema")
const GroupMigration = require ("../../models/groupEmployee/groupMigration")
const GroupEmployee = require ("../../models/groupEmployee/groupEmployeeSchema")

async function saveMediaToServer(documents){
  let counter = 0;
  for (const file of documents){
    console.log(file);
      await saveFile(file.base64String, file.name, file.path);
      counter++;
      console.log('File number '+counter+' saved');
  }
  if(counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path){
  // const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, '');
  const binaryData = Buffer.from(base64String, 'base64');
  const filePath = file_path +fileName;
  fs.writeFile(filePath, binaryData, 'binary', (err) => {
    if (err) {
      console.error('Error saving the file:', err);
    } else {
      console.log('File saved successfully!');
    }
  });
}

const createEmployee = async (employeeData, documents) => {
  console.log(employeeData);
  console.log(documents);
  let saveResult = await saveMediaToServer(documents);
  console.log(saveResult);
  const hashedPassword = await bcrypt.hash(employeeData.password, 10);
return await employeeDao.createEmployee({ ...employeeData, password: hashedPassword });
};

const loginEmployee = async (login, password) => {
  const employee = await employeeDao.findEmployeeByLogin(login);

  if (!employee) {
    throw new Error('employee not found');
  }

  if (await bcrypt.compare(password, employee.password)) {
    const accessToken = jwt.sign({ employee: employee.login }, 'yourSecretKey');
    return { accessToken };
  } else {
    throw new Error('Incorrect password');
  }
};

const getEmployeeById = async (id) => {
    return await employeeDao.getEmployeeById(id);
  };
const getEmployees = async () => {
    return await employeeDao.getEmployee();
  };
  
  const deleteEmployee = async (id) => {
    return await employeeDao.deleteEmployee(id);
  };
  
  const getEmployeeByEmail = async (email) => {
    return await employeeDao.getEmployeeByEmail(email);
  };
  const getEmployeeByIdCompany = async (idCompany) => {
    return await employeeDao.getEmployeeByIdCompany(idCompany);
  };

  const updateEmployee = async (id, updateData) => {
    return await employeeDao.updateEmployee(id, updateData);
  };


  async function removeEmployeeFromGroup(employeeId, groupId) {
    const employee = await Employee.findById(employeeId);
  
    if (!employee) {
      throw new Error('Employee not found');
    }
  
    const group = await GroupEmployee.findById(groupId).populate('employees');
  
    if (!group) {
      throw new Error('Group not found');
    }
  
    // Create a GroupMigration document first
    const leavingDate = new Date().toISOString();
    const joiningDate = employee.groupJoiningDate 
    const migration = await new GroupMigration({
      employeeId,
      groupId,
      joiningDate,
      leftDate: leavingDate
    }).save(); 
  
    // Remove employee from group's employees array and update employee
    group.employees.pull(employeeId);
    employee.groupId = null;
    employee.groupJoiningDate = null;
  
    await Promise.all([employee.save(), group.save()]); // Update employee and group
  
    return { employee, group, migration };
  }
 

  module.exports = {createEmployee,getEmployeeByEmail,getEmployees,deleteEmployee,getEmployeeById, updateEmployee, loginEmployee, getEmployeeByIdCompany, removeEmployeeFromGroup}