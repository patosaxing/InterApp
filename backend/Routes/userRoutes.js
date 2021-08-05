//Import Statements
const express = require("express")
const router = express.Router()
const authControl = require("../Controllers/authControl")

router.post("/register", authControl.register)


module.exports = router