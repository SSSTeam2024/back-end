const AboutUs = require("../../models/aboutUsComponentModel/aboutUsComponentModel");

const createAboutUs = async (aboutUsData) => {
  return await AboutUs.insertMany(aboutUsData);
};

const getAboutUs = async () => {
  return await AboutUs.find();
};

const updateAboutUs = async (id, updateData) => {
  const {
    display,
    page,
    image,
    littleTitle,
    bigTitle,
    paragraph,
    button,
    order,
  } = updateData;

  return await AboutUs.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        image: image,
        littleTitle: littleTitle,
        bigTitle: bigTitle,
        paragraph: paragraph,
        button: button,
        page: page,
        display: display,
        order: order,
      },
    },
    { new: true }
  );
};

const deleteAboutUs = async (id) => {
  return await AboutUs.findByIdAndDelete(id);
};

const getAboutUsById = async (id) => {
  return await AboutUs.findById(id);
};

module.exports = {
  createAboutUs,
  getAboutUs,
  updateAboutUs,
  deleteAboutUs,
  getAboutUsById,
};
