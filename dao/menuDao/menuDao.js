const Menu = require("../../models/MenuModel/menuModel");

const createMenu = async (menuData) => {
  return await Menu.create(menuData);
};

const getMenus = async () => {
  return await Menu.find();
};

const updateMenu = async (id, updateData) => {
  return await Menu.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteMenu = async (id) => {
  return await Menu.findByIdAndDelete(id);
};

const addMenuItem = async (menuId, newItem) => {
  return await Menu.findByIdAndUpdate(
    menuId,
    { $push: { items: newItem } },
    { new: true, runValidators: true }
  );
};

const addSubItem = async (menuId, itemId, subItemData) => {
  await Menu.updateOne(
    { _id: menuId, "items._id": itemId, "items.subItems": { $exists: false } },
    { $set: { "items.$.subItems": [] } }
  );

  return await Menu.findOneAndUpdate(
    { _id: menuId, "items._id": itemId },
    { $push: { "items.$.subItems": subItemData } },
    { new: true }
  );
};

module.exports = {
  createMenu,
  getMenus,
  updateMenu,
  deleteMenu,
  addMenuItem,
  addSubItem,
};
