const mongoose = require('mongoose');

const connectDb = (async() => {
    try {
        const connect = await mongoose.connect ('mongodb://127.0.0.1:27017/test')
        console.log('connected to database port :',connect.connection.host);

    }catch(error){
        console.log(error);
        process.exit(1);
    }

})

module.exports = connectDb;