const rejectedJobsServices = require("../../services/rejectedJobsByAffiliateServices/rejectedJobsByAffiliateServices");

const createRejectedJobs = async (req, res) => {
  try {
    const { affiliate, job_id } = req.body;

    await rejectedJobsServices.createRejectedJobs({ affiliate, job_id });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getRejectedJobs = async (req, res) => {
  try {
    const affiliateID = req.params.id;
    const rejectedJobs = await rejectedJobsServices.getRejectedJobs(
      affiliateID
    );
    res.json(rejectedJobs);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// const updateSource = async (req, res) => {
//   try {
//     const sourceId = req.params.id;
//     const { name } = req.body;

//     const updatedSource = await sourceService.updateSource(sourceId, { name });

//     if (!updatedSource) {
//       return res.status(404).send("Source not found");
//     }
//     res.json(updatedSource);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

// const deleteSource = async (req, res) => {
//   try {
//     const sourceId = req.params.id;

//     const deletedSource = await sourceService.deleteSource(sourceId);

//     if (!deletedSource) {
//       return res.status(404).send("Source not found");
//     }
//     res.sendStatus(200);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

module.exports = {
  createRejectedJobs,
  getRejectedJobs,
  //   updateSource,
  //   deleteSource,
};
