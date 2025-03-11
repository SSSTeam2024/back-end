const menuServices = require("../../services/menuServices/menuServices");

const createMenu = async (req, res) => {
  try {
    const { menuName, items } = req.body;

    await menuServices.createMenu({ menuName, items });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getMenus = async (req, res) => {
  try {
    const Menus = await menuServices.getMenus();
    res.json(Menus);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateMenu = async (req, res) => {
  try {
    const MenuId = req.params.id;
    const { menuName, items } = req.body;

    const updatedMenu = await menuServices.updateMenu(MenuId, {
      menuName,
      items,
    });

    if (!updatedMenu) {
      return res.status(404).send("Menu not found");
    }
    res.json(updatedMenu);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteMenu = async (req, res) => {
  try {
    const MenuId = req.params.id;

    const deletedMenu = await menuServices.deleteMenu(MenuId);

    if (!deletedMenu) {
      return res.status(404).send("Menu not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const addMenuItem = async (req, res) => {
  try {
    const { menuId, newItem } = req.body;
    console.log("req.body", req.body);
    if (!menuId || !newItem) {
      return res.status(400).json({ error: "menuId and newItem are required" });
    }

    const updatedMenu = await menuServices.addMenuItem(menuId, newItem);
    if (!updatedMenu) {
      return res.status(404).json({ error: "Menu not found" });
    }

    res.status(200).json(updatedMenu);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const addSubItemToMenuItem = async (req, res) => {
  const { menuId, itemId } = req.params;
  const subItemData = req.body;

  try {
    const updatedMenu = await menuServices.addSubItemToMenuItem(
      menuId,
      itemId,
      subItemData
    );
    if (!updatedMenu) {
      return res.status(404).json({ message: "Menu or item not found" });
    }
    res.json(updatedMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMenu,
  getMenus,
  updateMenu,
  deleteMenu,
  addMenuItem,
  addSubItemToMenuItem,
};
