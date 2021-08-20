//Import Statements
const express = require ("express")
const app = express()
const dotenv = require("dotenv")
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRoutes =  require("./Routes/userRoutes")

//Database Import Statement
const connectDB = require("./Models/db")

//Port Setup
const port = 3000 

//Database connection
dotenv.config()
connectDB()

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//User route
app.use('/app', userRoutes)

app.listen(port, () =>
{
    console.log(`Application listening at http://localhost:${port}`)
})