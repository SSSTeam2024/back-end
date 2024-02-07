const visitorDao = require('../../dao/visitorDao/visitorDao');

const createVisitor = async (visitorData) => {
  return await visitorDao.createVisitor(visitorData);
};

const getVisitors = async () => {
  return await visitorDao.getVisitors();
};

const getVisitorById = async (id) => {
  return await visitorDao.getVisitorById(id);
}

module.exports = {
  createVisitor,
  getVisitors,
  getVisitorById,
};
