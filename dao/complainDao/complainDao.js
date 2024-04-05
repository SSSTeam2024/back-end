const Complain = require('../../models/complainSchema/complainSchema');

const createComplain = async (complainData) => {
 try {
  return await Complain.create(complainData);
 } catch (error) {
  console.error('Error updating complaint status in DAO:', error);
  throw error;
 } 
};


const updateComplaintStatus = async (_id, newStatus) => {
  try {
      return await Complain.findByIdAndUpdate(_id, { status: newStatus });
  } catch (error) {
      console.error('Error updating complaint status in DAO:', error);
      throw error;
  }
};

// DAO method to update the complaint response (message, author, and date)
const updateComplaintResponse = async (_id, responseMessage, responseAuthor, responseDate, resPhoto, resVideo) => {
 
  console.log("from dao",resPhoto)
  console.log("from dao",resVideo)
  try {
      return await Complain.findByIdAndUpdate({_id}, {
          responseMessage,
          responseAuthor,
          responseDate,
          resPhoto,
          resVideo
      });
  } catch (error) {
      console.error('Error updating complaint response in DAO:', error);
      throw error;
  }
};




const updateComplainToPushed= async(_id, newStatus)=> {
  try {
      const updatedComplain = await Complain.findByIdAndUpdate(
          _id,
          { status: newStatus },
          { new: true } // to return the updated document
      );
      return updatedComplain;
  } catch (error) {
      throw error;
  }
}
const updateComplainToArchived= async(_id, newStatus)=> {
  try {
      const updatedComplain = await Complain.findByIdAndUpdate(
          _id,
          { archived: newStatus },
          { new: true } // to return the updated document
      );
      return updatedComplain;
  } catch (error) {
      throw error;
  }
}


const getComplains = async () => {
  return await Complain.find().populate("id_employee");
};


const getComplainById = async (id) => {
  return await Complain.findById(id);
}

const updateComplain = async (id, updateData) => {
  return await Complain.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteComplain = async (id) => {
  return await Complain.findByIdAndDelete(id);
};
const getComplainByIdCompany = async (id_corporate) => {
  return await Complain.find({id_corporate});
}


// const deleteComplain = async () => {
//   return await Complain.deleteMany({ _id: null });
// };

module.exports = {
  createComplain,
  getComplains,
  updateComplaintResponse,
  getComplainById,
  updateComplain,
  deleteComplain,
  updateComplaintStatus,
  updateComplainToPushed,
  updateComplainToArchived,
  getComplainByIdCompany
  
};