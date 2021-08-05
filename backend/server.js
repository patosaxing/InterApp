//Import Statements
const express = require ("express")
const app = express()
const dotenv = require("dotenv")
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRoutes =  require("./Routes/userRoutes")

const connectDB = require("./Models/db")

//Port Setup
const port = 3000

//Database import and connection
dotenv.config()
connectDB()

//Middleware
app.use(cors())
app.use(express.json({ extended: true }))
app.use(cookieParser())

app.listen(port, () =>
{
    console.log(`Application listening at http://localhost:${port}`)
})