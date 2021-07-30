//Database Setup

//Import Statements
const mongoose = require("mongoose")
require("dotenv").config

//Database credentials
const connectDB = async () => 
{
    mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
}

//Database Connection
const db = mongoose.connection;
db.once("open", (_) => console.log("InterApp DB is now connected"));
db.on("error", (err) => console.error("InterApp DB connection error!", err));


module.exports = connectDB;