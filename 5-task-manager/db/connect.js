const mongoose = require('mongoose');

// const connectionString = 'mongodb+srv://pradeep:Test123@nodeexpressprojects.hl3pl.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority';  

const connectDB = (url) => {
    return mongoose.connect(url, { 
        useNewUrlParser: true,  //This is for resolving deprecation errors
        useCreateIndex: true, 
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;