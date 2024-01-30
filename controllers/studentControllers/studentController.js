const studentService = require("../../services/studentService");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    await authService.registerUser({ username, password });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { login, password } = req.body;
    const result = await authService.loginUser(login, password);
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

const logout = (req, res) => {
  res.clearCookie("access_token");
  res.sendStatus(200);
};

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
    } = req.body;

    const updateStudent = await studentService.updateStudent(
        studentId,
      {
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
        category,
        region,
        service_date,
        status,
        account_name,
        sort_code,
        account_number,
        bank_name,
        login,
        password,
        card_id,
        id_creation_date,
        license_id,
        license_date,
      }
    );

    if (!updateStudent) {
      return res.status(404).send("Student not found!");
    }
    res.json(updateStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const addStudent = async (req, res) => {
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
  
      
      const newStudent = await studentService.addStudent({
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
  
module.exports = {
  register,
  login,
  logout,
  updateProfile,
  addStudent
};
