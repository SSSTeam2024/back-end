const mongoose = require('mongoose');


const makeConnection = async () => {
    mongoose.connect('mongodb+srv://sssteam2024:ogA6KY9XssmX4q6y@testbct.qxx75ys.mongodb.net/bctdb', { }).then(()=>{
        console.log('DB connected successfully!');
    });
}

module.exports = makeConnection;
