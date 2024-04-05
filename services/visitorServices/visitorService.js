const visitorDao = require("../../dao/visitorDao/visitorDao");

const createVisitor = async (visitorData) => {
  return await visitorDao.createVisitor(visitorData);
};

const getVisitors = async () => {
  return await visitorDao.getVisitors();
};

const getVisitorById = async (id) => {
  return await visitorDao.getVisitorById(id);
};

//delete Visitor
const deleteVisitor = async (id) => {
  return await visitorDao.deleteVisitor(id);
};

const updateToPending = async (updateData) => {
  let visitor_id = updateData.visitor_id;
  let status = updateData.status;
  await visitorDao.updateStatus(visitor_id, status);
  return "Visitor Status Updated!!";
};
module.exports = {
  createVisitor,
  getVisitors,
  getVisitorById,
  deleteVisitor,
  updateToPending
};
