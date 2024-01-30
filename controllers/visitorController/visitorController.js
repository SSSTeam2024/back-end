const visitorService = require("../../services/visitorServices/visitorService");

const createVisitor = async (req, res) => {
  try {
    const { email, name, phone } = req.body;

    const visitor = await visitorService.createVisitor({ email, name, phone });
    res.json(visitor);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getVisitors = async (req, res) => {
  try {
    const visitors = await visitorService.getVisitors();
    res.json({ visitors });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getVisitorById = async (req, res) => {
  try {
    const visitorId = req.params.id;

    const getVisitor = await visitorService.getVisitorById(visitorId);

    if (!getVisitor) {
      return res.status(404).send("Visitor not found");
    }
    res.json(getVisitor);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createVisitor,
  getVisitors,
  getVisitorById,
};
