const studentService = require("../../services/studentService");
const globalFunctions = require('../../utils/globalFunction');
// register student
const registerStudent= async (req, res) => {
  try {
    const { 
      firstName,
      lastName,
      nameParent,
      card_id,
      country,
      deparment,
      houseStreerNumber,
      classStudent,
      dateBirth,
      email,
      phone,
      status,
      login,
      password,
      id_creation_date,
      IdFileBase64String,
      IdFileExtension 
    } = req.body;

    let id_file = globalFunctions.generateUniqueFilename(IdFileExtension,'CardId');

    let documents = [
      {
        base64String: IdFileBase64String,
        extension: IdFileExtension,
        name: id_file
      },
     
    ];
    
    await studentService.registerStudent({ 
      firstName,
      lastName,
      nameParent,
      card_id,
      country,
      deparment,
      houseStreerNumber,
      classStudent,
      dateBirth,
      email,
      phone,
      status,
      login,
      password,
      id_creation_date,
      id_file,
     },documents);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// login student
const login = async (req, res) => {
  try {
    const { login, password } = req.body;
    const result = await studentService.loginStudent(login, password);
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
// get student by id
const getStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;

    const getStudent= await studentService.getStudentById(studentId);

    if (!getStudent) {
      return res.status(404).send('Student not found');
    }
    res.json(getStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}
// get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getStudents();
    res.json({ students });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// get student by email
const getStudentByEmail = async (req, res) => {
  try {
    const studentEmail = req.params.email;

    const getStudent= await studentService.getStudentByEmail(studentEmail);

    if (!getStudent) {
      return res.status(404).send('Student not found');
    }
    res.json(getStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// logout 
const logout = (req, res) => {
  res.clearCookie("access_token");
  res.sendStatus(200);
};
// update password student account
const updatePassword = async (req, res) => {
  try {
    const studentId = req.params.id;
    const { 
      password
     } = req.body;

    const updateStudent = await studentService.updatePassword(studentId, { 
      password
     });

    if (!updateStudent) {
      return res.status(404).send('Student not found!');
    }
    res.json(updateStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}
// update student profile
const updateProfile = async (req, res) => {
  try {
    const studentId = req.params.id;
    const {
      firstName,
      lastName,
      nameParent,
      card_id,
      country,
      deparment,
      houseStreerNumber,
      classStudent,
      dateBirth,
      email,
      phone,
      status,
      login,
      password,
      id_creation_date,
      IdFileBase64String,
      IdFileExtension,    
    } = req.body;
    let id_file;
    if (IdFileBase64String && IdFileExtension) {
      id_file = globalFunctions.generateUniqueFilename(IdFileExtension, 'CardId');
      let documents = [
        {
          base64String: IdFileBase64String,
          extension: IdFileExtension,
          name: id_file,
        },
      ];
      await studentService.updatedStudent(studentId, {
        firstName,
        lastName,
        nameParent,
        card_id,
        country,
        deparment,
        houseStreerNumber,
        classStudent,
        dateBirth,
        email,
        phone,
        status,
        login,
        password,
        id_creation_date,
        id_file,
      }, documents);
    } else {
      await studentService.updatedStudent(studentId, {
        firstName,
        lastName,
        nameParent,
        card_id,
        country,
        deparment,
        houseStreerNumber,
        classStudent,
        dateBirth,
        email,
        phone,
        status,
        login,
        password,
        id_creation_date,
      });
    }

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};


const createStudent = async (req, res) => {
    try {
      console.log("req.body addstudent",req.body); 
      const {
        firstName,
        lastName,
        nameParent,
        card_id,
        country,
        deparment,
        status,
        houseStreerNumber,
        classStudent,
        dateBirth,
        email,
        phone,
        login,
        password,
        id_creation_date,
        id_file, 
      } = req.body;
  
      
      const newStudent = await studentService.createStudent({
        firstName,
        lastName,
        nameParent,
        country,
        deparment,
        dateBirth,
        classStudent,
        houseStreerNumber,
        email,
        phone,
        status,
        login,
        password,
        card_id,
        id_creation_date,
        id_file,
      });
  
      res.json(newStudent);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };
  // delete stduent account 
  const deleteStudent = async (req, res) => {
    try {
      const studentId = req.params.id;
  
      const deletedStudent = await studentService.deleteStudent(studentId);
  
      if (!deletedStudent) {
        return res.status(404).send('Student not found');
      }
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };
module.exports = {
  registerStudent,
  login,
  logout,
  deleteStudent,
  updateProfile,
  createStudent,
  getStudentById,
  getAllStudents,
  getStudentByEmail,
  updatePassword
};
