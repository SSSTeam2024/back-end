const studentService = require("../../services/studentServices/studentService");
const globalFunctions = require("../../utils/globalFunction");
// register student
const registerStudent = async (req, res) => {
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
      status_account,
      login,
      password,
      id_creation_date,
      IdFileBase64String,
      IdFileExtension,
      PhotoIdBase64String,
      PhotoIdExtension,
      parent_id,
      DropOff_date,
      DropOff_time,
      DropOff_station,
      pickUp_date,
      pickUp_time,
      pickUp_station,
      group,
      api_token,
      groupJoiningDate,
      idSchool,
    } = req.body;

    const id_filePath = "files/studentFiles/img/";
    const photo_idPath = "files/studentFiles/pdf/";

    let id_file = globalFunctions.generateUniqueFilename(
      IdFileExtension,
      "PhotCardId"
    );
    let photo_id = globalFunctions.generateUniqueFilename(
      PhotoIdExtension,
      "CardId"
    );

    let documents = [
      {
        base64String: IdFileBase64String,
        extension: IdFileExtension,
        name: id_file,
        path: id_filePath,
      },
      {
        base64String: PhotoIdBase64String,
        extension: PhotoIdExtension,
        name: photo_id,
        path: photo_idPath,
      },
    ];

    await studentService.registerStudent(
      {
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
        status_account,
        login,
        password,
        id_creation_date,
        id_file,
        parent_id,
        DropOff_date,
        DropOff_time,
        DropOff_station,
        pickUp_date,
        pickUp_time,
        pickUp_station,
        group,
        photo_id,
        idSchool,
        groupJoiningDate,
        api_token
      },
      documents
    );

    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get student by id parent
const getStudentByIdParent = async (req, res) => {
  try {
    const parentId = req.params.id;
    console.log("Parent ID:", parentId);

    const students = await studentService.getStudentsByParentId(parentId);
    console.log("Result from service:", students);

    if (!students || students.length === 0) {
      console.log("No students found for the given parent ID");
      return res.status(404).send("No students found for the given parent ID");
    }

    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// login student
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await studentService.loginStudent(email, password);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(401).send(error.message);
  }
};
// get student by id

const getStudentById = async (req, res) => {
  try {
    console.log(req);
    const studentId = req.params.id;
    console.log("Student ID:", studentId);

    const getStudent = await studentService.getStudentById(studentId);
    console.log("Result from service:", getStudent);

    if (!getStudent) {
      console.log("Student not found");
      return res.status(404).send("Student not found");
    }

    res.json(getStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getStudents();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// get student by email
const getStudentByEmail = async (req, res) => {
  try {
    const studentEmail = req.params.email;

    const getStudent = await studentService.getStudentByEmail(studentEmail);

    if (!getStudent) {
      return res.status(404).send("Stud not found");
    }
    res.json(getStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// logout
const logout = async (req, res) => {
  let id = req.params.id;
  await studentService.logout(id);
  res.send({ result: "Successfully logged out" });
};
// update password student account
const updatePassword = async (req, res) => {
  try {
    const studentId = req.params.id;
    const { password } = req.body;

    const updateStudent = await studentService.updatePassword(studentId, {
      password,
    });

    if (!updateStudent) {
      return res.status(404).send("Student not found!");
    }
    res.json(updateStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
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
      DropOff_date,
      DropOff_time,
      DropOff_station,
      pickUp_date,
      pickUp_time,
      pickUp_station,
    } = req.body;
    let id_file;
    if (IdFileBase64String && IdFileExtension) {
      id_file = globalFunctions.generateUniqueFilename(
        IdFileExtension,
        "CardId"
      );
      let documents = [
        {
          base64String: IdFileBase64String,
          extension: IdFileExtension,
          name: id_file,
        },
      ];
      await studentService.updatedStudent(
        studentId,
        {
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
          DropOff_date,
          DropOff_time,
          DropOff_station,
          pickUp_date,
          pickUp_time,
          pickUp_station,
        },
        documents
      );
    } else {

      let updatedStudent = await studentService.updatedStudent(studentId, {
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
        DropOff_date,
        DropOff_time,
        DropOff_station,
        pickUp_date,
        pickUp_time,
        pickUp_station,
      });
      res.json(updatedStudent);
    }

   
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const createStudent = async (req, res) => {
  try {
    console.log("req.body addstudent", req.body);
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
    const idstudent = req.params.id;

    const deletedStudent = await studentService.deleteStudent(idstudent);

    if (!deletedStudent) {
      return res.status(404).send("Student not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getStudentByIdSchool = async (req, res) => {
  try {
    const idSchool = req.body.idSchool;
    const getStudentsByIdSchool = await studentService.getStudentByIdSchool(
      idSchool
    );
    if (!getStudentsByIdSchool) {
      res.status(404).send("student not found");
    }
    res.json({ getStudentsByIdSchool });
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
  updatePassword,
  getStudentByIdParent,
  getStudentByIdSchool,
};