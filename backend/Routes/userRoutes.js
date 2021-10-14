//Import Statements
const express = require("express")
const router = express.Router()
const authControl = require("../Controllers/authControl")
const {protect, admin} = require("../Middleware/auth")


router.post("/register", authControl.register)
router.post("/login", authControl.login)

// router.get("/", async(req,res) =>
// {
//     res.send("I am hitting home page")
// })

module.exports = router