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
], authControl.register);


router.post("/login", authControl.login);
router.post("/forgotPassword", authControl.forgotPassword);
router.put("/passwordReset/:resetToken", authControl.resetPassword);
router.post("/logout", authControl.logout);


router
  .route("/profile")
  .get(protect, authControl.getUserProfile)
  .put(protect, authControl.updateUserProfile);

//Admin routes to control user list
router
   .route('/:id')
   .delete(protect, admin, authControl.deleteUser)
   .get(protect, admin, authControl.getUsers)
   .put(protect, admin, authControl.updateUser);



module.exports = router