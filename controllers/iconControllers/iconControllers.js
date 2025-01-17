const iconServices = require("../../services/iconServices/iconServices");

const createIcon = async (req, res) => {
  try {
    const { label, code } = req.body;

    await iconServices.createIcon({ label, code });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getIcons = async (req, res) => {
  try {
    const Icons = await iconServices.getIcons();
    res.json(Icons);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateIcon = async (req, res) => {
  try {
    const IconId = req.params.id;
    const { label, code } = req.body;

    const updatedIcon = await iconServices.updateIcon(IconId, {
      label,
      code,
    });

    if (!updatedIcon) {
      return res.status(404).send("Icon not found");
    }
    res.json(updatedIcon);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteIcon = async (req, res) => {
  try {
    const IconId = req.params.id;

    const deletedIcon = await iconServices.deleteIcon(IconId);

    if (!deletedIcon) {
      return res.status(404).send("Icon not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createIcon,
  getIcons,
  updateIcon,
  deleteIcon,
};
