const calculateProgress = (data) => {
   // Add logging
    const requiredFields = ['id_file', 'number_file','id_creation_date','insurance_number','insurance_date','insurance_file'];
    const filledFields = requiredFields.filter(field => data[field] !== undefined && data[field] !== null && data[field] !== '');
    console.log('Filled fields:', filledFields);
    const progress = (filledFields.length / requiredFields.length) * 100;
    console.log('Progress:', progress);
    return Math.round(progress);
};

  module.exports = {
    calculateProgress
  };