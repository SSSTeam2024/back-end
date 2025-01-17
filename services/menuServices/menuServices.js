const menuDao = require("../../dao/menuDao/menuDao");

const createMenu = async (menuData) => {
  return await menuDao.createMenu(menuData);
};

const getMenus = async () => {
  return await menuDao.getMenus();
};

const updateMenu = async (id, updateData) => {
  return await menuDao.updateMenu(id, updateData);
};

const deleteMenu = async (id) => {
  return await menuDao.deleteMenu(id);
};

const addMenuItem = async (menuId, newItem) => {
  return await menuDao.addMenuItem(menuId, newItem);
};

const addSubItemToMenuItem = async (menuId, itemId, subItemData) => {
  return await menuDao.addSubItem(menuId, itemId, subItemData);
};

module.exports = {
  createMenu,
  getMenus,
  updateMenu,
  deleteMenu,
  addMenuItem,
  addSubItemToMenuItem,
};
