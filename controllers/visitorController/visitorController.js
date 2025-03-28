const visitorService = require("../../services/visitorServices/visitorService");

const createVisitor = async (req, res) => {
  try {
    const {
      email,
      name,
      phone,
      start_point,
      estimated_start_time,
      destination_point,
      estimated_return_start_time,
      status,
      enquiryDate,
    } = req.body;
    console.log("visitor", req.body);
    const visitor = await visitorService.createVisitor({
      email,
      name,
      phone,
      start_point,
      estimated_start_time,
      destination_point,
      estimated_return_start_time,
      status,
      enquiryDate,
    });
    res.json(visitor);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getVisitors = async (req, res) => {
  try {
    const visitors = await visitorService.getVisitors();
    res.json(visitors);
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

const getVisitorByEmail = async (req, res) => {
  try {
    const visitorEmail = req.params.email;

    const getVisitor = await visitorService.getVisitorByEmail(visitorEmail);

    if (!getVisitor) {
      return res.status(404).send("Visitor not found");
    }
    res.json(getVisitor);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// delete visitor account
const deleteVisitor = async (req, res) => {
  try {
    const visitorId = req.params.id;

    const deletedVisitor = await visitorService.deleteVisitor(visitorId);

    if (!deletedVisitor) {
      return res.status(404).send("Visitor not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateVisitorStatusAPI = async (req, res) => {
  try {
    const { visitor_id, status } = req.body;
    const sentResult = await visitorService.updateToPending({
      visitor_id,
      status,
    });
    console.log("req. body update", req.body);
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createVisitor,
  getVisitors,
  getVisitorById,
  deleteVisitor,
  updateVisitorStatusAPI,
  getVisitorByEmail,
};
