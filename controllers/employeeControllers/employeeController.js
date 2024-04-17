const employeeService = require("../../services/employeeServices/employeeService");
const globalFunctions = require("../../utils/globalFunctions");

const addNewEmployee = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      idCompany,
      civilStatus,
      gender,
      address,
      station,
      mobile,
      email,
      photosBase64String,
      photosExtension,
      dateOfBirth,
      username,
      groupId,
      positionTitle,
      legalcardBase64String,
      legalcardExtension,
      login,
      password,
      nationality,
      status,
    } = req.body;

    // let grouppId= groupId._id;
    // if (grouppId === "" ) {
    //   grouppId = "001122334455667788991234"
    // }
    console.log(req.body);
    const legalcardPath = "files/employeeFiles/";
    const photoPath = "files/employeeFiles/";

    let legalcard = globalFunctions.generateUniqueFilename(
      legalcardExtension,
      "employeeMedia"
    );
    let photos = globalFunctions.generateUniqueFilename(
      photosExtension,
      "employeePhotos"
    );

    let documents = [
      {
        base64String: legalcardBase64String,
        extension: legalcardExtension,
        name: legalcard,
        path: legalcardPath,
      },
      {
        base64String: photosBase64String,
        extension: photosExtension,
        name: photos,
        path: photoPath,
      },
    ];

    const employeeCreate = await employeeService.createEmployee(
      {
        firstName,
        lastName,
        idCompany,
        civilStatus,
        gender,
        address,
        station,
        mobile,
        email,
        dateOfBirth,
        username,
        groupId,
        login,
        password,
        photos,
        legalcard,
        positionTitle,
        nationality,
        status,
      },
      documents
    );
    res.json(employeeCreate);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const loginEmployee = async (req, res) => {
  try {
    const { login, password } = req.body;
    const result = await employeeService.loginEmployee(login, password);
    res.cookie("access_token", result.accessToken, {
      httpOnly: true,
      secure: true,
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(401).send(error.message);
  }
};

const logoutEmployee = (req, res) => {
  res.clearCookie("access_token");
  res.sendStatus(200);
};
const getEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getEmployees();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employeeId = req.params.id;

    const getEmployee = await employeeService.getEmployeeById(employeeId);

    if (!getEmployee) {
      return res.status(404).send("Employee not found");
    }
    res.json(getEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;

    const deletedEmployee = await employeeService.deleteEmployee(employeeId);

    if (!deletedEmployee) {
      return res.status(404).send("Employee not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const {
      firstName,
      lastName,
      idCompany,
      civilStatus,
      gender,
      address,
      station,
      mobile,
      email,
      photosBase64String,
      photosExtension,
      dateOfBirth,
      username,
      groupId,
      legalcardBase64String,
      legalcardExtension,
      login,
      password,
      positionTitle,
      nationality,
      status,
    } = req.body;

    const updateEmployee = await employeeService.updateEmployee(employeeId, {
      firstName,
      lastName,
      idCompany,
      civilStatus,
      gender,
      address,
      station,
      mobile,
      email,
      photosBase64String,
      photosExtension,
      dateOfBirth,
      username,
      groupId,
      legalcardBase64String,
      legalcardExtension,
      login,
      password,
      positionTitle,
      nationality,
      status,
    });

    if (!updateEmployee) {
      return res.status(404).send("Employee not found!");
    }
    res.json(updateEmployee);
  } catch (error) {}
};

const getEmployeeByEmail = async (req, res) => {
  try {
    const employeeEmail = req.body.email;
    const getEmployeeByEmail = await employeeService.getEmployeeByEmail(
      employeeEmail
    );
    if (!getEmployeeByEmail) {
      res.status(404).send("employee not found");
    }
    res.json(getEmployeeByEmail);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getEmployeeByIdCompany = async (req, res) => {
  try {
    const idCompany = req.body.idCompany;
    const getEmployeesByIdCompany =
      await employeeService.getEmployeeByIdCompany(idCompany);
    if (!getEmployeesByIdCompany) {
      res.status(404).send("employee not found");
    }
    res.json({ getEmployeesByIdCompany });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  addNewEmployee,
  getEmployees,
  getEmployeeById,
  deleteEmployee,
  updateEmployee,
  getEmployeeByEmail,
  loginEmployee,
  logoutEmployee,
  getEmployeeByIdCompany,
};
