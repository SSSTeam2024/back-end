const Visitor = require("../../models/visitorModel/visitor");

const createVisitor = async (visitorData) => {
  return await Visitor.create(visitorData);
};

const getVisitors = async () => {
  return await Visitor.find();
};

const getVisitorById = async (id) => {
  return await Visitor.findById(id);
};

// delete Visitor profile
const deleteVisitor = async (id) => {
  return await Visitor.findByIdAndDelete(id);
};

const updateStatus = async (visitor_id, status) => {
  return await Visitor.findByIdAndUpdate(
    { _id: visitor_id },
    {
      $set: {
        status: status,
      },
    }
  );
};

module.exports = {
  createVisitor,
  getVisitors,
  getVisitorById,
  deleteVisitor,
  updateStatus
};
