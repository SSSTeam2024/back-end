const employeeDao = require("../../dao/employeeDao/employeeDao");
const fs = require("fs").promises;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Employee = require("../../models/employeeSchema/employeeSchema");
const GroupMigration = require("../../models/groupEmployee/groupMigration");
const GroupEmployee = require("../../models/groupEmployee/groupEmployeeSchema");
const globalFunctions = require("../../utils/globalFunctions");
const passwordResetVerificationService = require("../../services/passwordResetVerificationServices/passwordResetVerificationService");
const emailTemplates = require("../../utils/emailTemplatesStructure");
const emailService = require("../../services/EmailService/emailService");

async function saveMediaToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    console.log(file);
    await saveFile(file.base64String, file.name, file.path);
    counter++;
    console.log("File number " + counter + " saved");
  }
  if (counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path) {
  // const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, '');
  const binaryData = Buffer.from(base64String, "base64");
  const filePath = file_path + fileName;
  await globalFunctions.ensureDirectoryExistence(file_path);
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

const createEmployee = async (employeeData, documents) => {
  console.log(employeeData);
  console.log(documents);
  let saveResult = await saveMediaToServer(documents);
  console.log(saveResult);
  const hashedPassword = await bcrypt.hash(employeeData.mobile, 10);
  return await employeeDao.createEmployee({
    ...employeeData,
    password: hashedPassword,
  });
};

const loginEmployee = async (login, password) => {
  const employee = await employeeDao.findEmployeeByLogin(login);

  if (!employee) {
    throw new Error("employee not found");
  }

  if (await bcrypt.compare(password, employee.password)) {
    const accessToken = jwt.sign({ employee: employee.login }, "yourSecretKey");
    await employeeDao.updateJwtToken(employee._id, String(accessToken));
    let updatedEmployee = await employeeDao.getEmployeeById(employee._id);
    return updatedEmployee;
  } else {
    throw new Error("Incorrect password");
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
  console.log("idCompany", idCompany);
  return await employeeDao.getEmployeeByIdCompany(idCompany);
};

const updateEmployee = async (id, updateData) => {
  console.log("id service", id);
  console.log("updateData service", updateData);
  return await employeeDao.updateEmployee(id, updateData);
};

async function removeEmployeeFromGroup(employeeId, groupId) {
  const employee = await Employee.findById(employeeId);

  if (!employee) {
    throw new Error("Employee not found");
  }

  const group = await GroupEmployee.findById(groupId).populate("employees");

  if (!group) {
    throw new Error("Group not found");
  }

  // Create a GroupMigration document first
  const leavingDate = new Date().toISOString();
  const joiningDate = employee.groupJoiningDate;
  const migration = await new GroupMigration({
    employeeId,
    groupId,
    joiningDate,
    leftDate: leavingDate,
  }).save();

  // Remove employee from group's employees array and update employee
  group.employees.pull(employeeId);
  employee.groupId = null;
  employee.groupJoiningDate = null;

  await Promise.all([employee.save(), group.save()]); // Update employee and group

  return { employee, group, migration };
}

const logout = async (id) => {
  return await employeeDao.logout(id);
};

const updateEmployeeStops = async (employeeList) => {
  let completionCounter = 0;

  let updatedEmployees = [];
  for (let employee of employeeList) {
    let updatedEmployee = await employeeDao.updateEmployeeStop(employee);
    completionCounter++;
    updatedEmployees.push(updatedEmployee);
  }

  if (completionCounter === employeeList.length) {
    return updatedEmployees;
  }
};

const updatePassword = async (id, password) => {
  const hashedPassword = await bcrypt.hash(password.password, 10);
  return await employeeDao.updatePassword(id, hashedPassword);
};

//** */ */
const generateCodeAndSendEmail = async (
  employeeId,
  expires_at_date,
  expires_at_time
) => {
  let employee = await employeeDao.getEmployeeById(employeeId);

  let verificationCode = Math.floor(100000 + Math.random() * 900000);
  console.log("verificationCode", verificationCode);

  let verificationCodeDoc =
    await passwordResetVerificationService.getPasswordResetCodeById(
      employeeId,
      "Employee",
      ""
    );
  if (verificationCodeDoc.length > 0) {
    console.log("Verification code found:", verificationCodeDoc[0]);
    let existedCode = verificationCodeDoc[0];
    await passwordResetVerificationService.deleteCode(existedCode._id);
    let verifCode = {
      user_id: employeeId,
      user_role: "Employee",
      verification_code: verificationCode,
      expires_at_date: expires_at_date,
      expires_at_time: expires_at_time,
    };

    let code = await passwordResetVerificationService.createCode(verifCode);
    console.log("created code", code);
  } else {
    console.log("Verification code not fount");
    let verifCode = {
      user_id: employeeId,
      user_role: "Employee",
      verification_code: verificationCode,
      expires_at_date: expires_at_date,
      expires_at_time: expires_at_time,
    };

    let code = await passwordResetVerificationService.createCode(verifCode);
    console.log("created code", code);
  }

  let emailBody =
    emailTemplates.emailTemplates.reset_password_verification_code(
      employee.firstName + " " + employee.lastName,
      verificationCode
    );
  let emailSubject = "Reset your password";
  let fullEmailObject = {
    to: employee.email /*"mouafekhedfi@gmail.com"  employee.email */,
    subject: emailSubject,
    body: emailBody,
  };

  let result = await emailService.sendEmail(fullEmailObject);

  return result;
};

module.exports = {
  createEmployee,
  getEmployeeByEmail,
  getEmployees,
  deleteEmployee,
  getEmployeeById,
  updateEmployee,
  loginEmployee,
  getEmployeeByIdCompany,
  removeEmployeeFromGroup,
  logout,
  updateEmployeeStops,
  updatePassword,
  generateCodeAndSendEmail,
};
