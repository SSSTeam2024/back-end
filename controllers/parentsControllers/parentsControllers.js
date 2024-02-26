const parentService = require("../../services/parentServices/parentServices");
const globalFunctions = require("../../utils/globalFunction");
// register parent
const registerParent = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      nameParent,
      card_id,
      country,
      deparment,
      houseStreerNumber,
      email,
      phone,
      status,
      login,
      password,
      id_creation_date,
      IdFileBase64String,
      IdFileExtension,
    } = req.body;

    let id_file = globalFunctions.generateUniqueFilename(
      IdFileExtension,
      "parentId"
    );

    let documents = [
      {
        base64String: IdFileBase64String,
        extension: IdFileExtension,
        name: id_file,
      },
    ];

    await parentService.registerParent(
      {
        firstName,
        lastName,
        nameParent,
        card_id,
        country,
        deparment,
        houseStreerNumber,
        email,
        phone,
        status,
        login,
        password,
        id_creation_date,
        id_file,
      },
      documents
    );
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// login parent
const login = async (req, res) => {
  try {
    const { login, password } = req.body;
    const result = await parentService.loginParent(login, password);
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

// get parent by id
const getParentById = async (req, res) => {
  try {
    console.log(req)
    const parentId = req.params.id;
    console.log('Parent ID:', parentId);

    const getParent = await parentService.getParentById(parentId);
    console.log('Result from service:', getParent);

    if (!getParent) {
      console.log('Parent not found');
      return res.status(404).send('Parent not found');
    }

    res.json(getParent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}
// get all parents
const getAllParents = async (req, res) => {
  try {
    const parents = await parentService.getParents();
    res.json( parents );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// get parent by email
const getParentByEmail = async (req, res) => {
  try {
    const parentEmail = req.params.email;

    const getparent = await parentService.getParentByEmail(parentEmail);

    if (!getparent) {
      return res.status(404).send("Parent not found");
    }
    res.json(getparent);
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
// update password parent account
const updatePassword = async (req, res) => {
  try {
    const parentId = req.params.id;
    const { password } = req.body;

    const updateParent = await parentService.updatePassword(parentId, {
      password,
    });

    if (!updateParent) {
      return res.status(404).send("Parent not found!");
    }
    res.json(updateParent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// update parent profile
const updateProfile = async (req, res) => {
  try {
    const parentId = req.params.id;
    const {
      firstName,
      lastName,
      nameParent,
      card_id,
      country,
      deparment,
      houseStreerNumber,
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
      id_file = globalFunctions.generateUniqueFilename(
        IdFileExtension,
        "parentId"
      );
      let documents = [
        {
          base64String: IdFileBase64String,
          extension: IdFileExtension,
          name: id_file,
        },
      ];
      await parentService.updatedParent(
        parentId,
        {
          firstName,
          lastName,
          nameParent,
          card_id,
          country,
          deparment,
          houseStreerNumber,
          email,
          phone,
          status,
          login,
          password,
          id_creation_date,
          id_file,
        },
        documents
      );
    } else {
      await parentService.updatedParent(parentId, {
        firstName,
        lastName,
        nameParent,
        card_id,
        country,
        deparment,
        houseStreerNumber,
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

const createParent = async (req, res) => {
  try {
    console.log("req.body addParent", req.body);
    const {
      firstName,
      lastName,
      nameParent,
      card_id,
      country,
      deparment,
      houseStreerNumber,
      email,
      phone,
      status,
      login,
      password,
      id_creation_date,
      id_file,
    } = req.body;

    const newParent = await parentService.createParent({
      firstName,
      lastName,
      nameParent,
      card_id,
      country,
      deparment,
      houseStreerNumber,
      email,
      phone,
      status,
      login,
      password,
      id_creation_date,
      id_file,
    });

    res.json(newParent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// delete parent account
const deleteParent = async (req, res) => {
  try {
    const parentId = req.params.id;

    const deletedParent = await parentService.deleteParent(parentId);

    if (!deletedParent) {
      return res.status(404).send("Parent not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get parent by student id
const getParentByStudentId = async (req, res) => {
  try {
    const studentId = req.params.id;
    console.log('Student ID:', studentId);

    const parents = await parentService.getParentByStudentId(studentId);
    console.log('Result from service:', parents);

    if (!parents || parents.length === 0) {
      console.log('No parents found for the given student ID');
      return res.status(404).send('No parents found for the given student ID');
    }

    // Assuming one parent for multiple children
    const parent = parents[0];

    // Here you might want to fetch details of the associated children as well
    const children = await studentService.getStudentsByParentId(parent._id);

    // Append children to the parent object
    parent.children = children;

    res.json(parent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};


module.exports = {
  registerParent,
  login,
  logout,
  deleteParent,
  updateProfile,
  createParent,
  getParentByEmail,
  getAllParents,
  getParentById,
  updatePassword,
  getParentByStudentId
};
