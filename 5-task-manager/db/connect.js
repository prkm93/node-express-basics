const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url, { 
        useNewUrlParser: true,  //This is for resolving deprecation errors
        useCreateIndex: true, 
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;
