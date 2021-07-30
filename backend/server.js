//Import Statements
const express = require ("express")
const app = express()
const dotenv = require("dotenv")

const connectDB = require("./Models/db")

//Port Setup
const port = 3000

dotenv.config()
connectDB()

app.get('/', (req, res) =>
{
    res.render()
})

app.listen(port, () =>
{
    console.log(`Application listening at http://localhost:${port}`)
})