const generateUniqueFilename = (extension, reference) => {
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
    const randomString = Math.random().toString(36).substring(2, 8);
    return `${timestamp}_${randomString}_${reference}.${extension}`;
}


module.exports = {
      generateUniqueFilename
};