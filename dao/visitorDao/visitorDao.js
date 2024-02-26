const Visitor = require('../../models/visitorModel/visitor');

const createVisitor = async (visitorData) => {
  return await Visitor.create(visitorData);
};

const getVisitors = async () => {
  return await Visitor.find();
};

const getVisitorById = async (id) => {
  return await Visitor.findById(id);
}

module.exports = {
  createVisitor,
  getVisitors,
  getVisitorById,
};