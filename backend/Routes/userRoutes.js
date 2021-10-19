//Import Statements
const express = require("express")
const { check, validationResult } = require("express-validator")
const router = express.Router()
const authControl = require("../Controllers/authControl")
const {protect, admin} = require("../Middleware/auth")


router.post("/register", [
        check("firstName", "First Name is Required").not().isEmpty(),
        check("lastName", "Last Name is Required").not().isEmpty(),
        check("email1", "Please include a valid email").isEmail(),
        check("userName", "Please enter your User Name").not().isEmpty()
], authControl.register)
router.post("/login", authControl.login)

// router.get("/", async(req,res) =>
// {
//     res.send("I am hitting home page")
// })

module.exports = router