//Import Statements
const crypto = require("crypto")
const User = require("../Models/user")
const asyncHandler = require("express-async-handler")
const { generateToken } = require("../utils/generateToken")
const sendEmail = require("../utils/sendEmail")

const authControl = {
    
    //Register Function
    register: asyncHandler(async (req, res, next) => 
    {
        const { userName, email, password, firstName, lastName } = req.body

        //check if Username already exists
        const userExits = await User.findOne({ userName })
        if (userExits)
        {
            return res.status(400).json("Username already exists,..Log In")
        }

        //check if email exists
        const emailExits = await User.findOne({ email })
        if (emailExits)
        {
            return res.status(400).json("Email already exists..Log In")
        }

        const user = await User.create(
            {
                userName, email, password, firstName, lastName
            }
        )

        if(user)
        {
            res.status(201).json(
                {
                    _id: user._id,
                    userName: user.userName,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: generateToken(user._id)
                }
            )
        }
        else
        {
            return res.status(400).json("Invalid user data. All fields are required")
        }
    }),

    //Login Function
    login: async(req, res, next) =>
    {
        console.log("here")
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        console.log(user)

        if (user && (await user.matchPassword(password)))
        {
            res.json({
                //_id: user._id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
                primarySkills: user.primarySkills,
                userLocation: user.userLocation,
                linkedIN: user.linkedIN
            })
        }

        else
        {
            return res.status(401).json("Invalid email or password")
        }
    },

    getUserProfile: async (req, res, next) =>
    {
        const user = await User.findById(req.user._id)

        if(user) {
        //    user.userName = req.body.userName || user.userName;
        //    user.email = req.body.email || user.email;
        //    user.firstName = req.body.firstName || user.firstName;
        //    user.lastName = req.body.lastName || user.lastName;

        //    if(req.body.password)
        //    {
        //        user.password = req.body.password
        //    }

        //    const userProfile = await user.save();

           res.json({
            //    _id: userProfile._id,
               userName: user.userName,
               email: user.email,
               firstName: user.firstName,
               lastName: user.lastName,
               isAdmin: user.isAdmin,
            //    token: generateToken(updatedUser._id)
           })
        }
        else
        {
            return res.status(401).json("User not found")
        }
    },

    //Update/Edit User Profile Function
    updateUserProfile: async(req, res) => {
        const id = req.user._id;
        const user = await User.findById(req.user._id);

        if(user) {
            user.userName = req.body.userName || user.userName;
            user.email = req.body.email || user.email;

            if (req.body.password){
                user.password = req.body.password;
            }

            const updatedUser = await user.save();

            res.json({
                userName: updatedUser.userName,
                email: updatedUser.email
            });
        }
        else{
            return res.status(401).json('User not found');
        }
    },

    //Get all Users
    getUsers: async (req, res) => {
        const user = await User.find({});
        res.json(user);  
    },

    //Delete User Function
    deleteUser: async (req, res) => {
        const user = await User.findById(req.params.id);

        if(user) {
            await user.remove();
            res.json({ message: 'User Removed' })
        }
        else{
            return res.status(400).json('User not found')
        }
    },

    //Update User Function
    updateUser: async (req, res) => {
        const user = await User.findById(req.params.id);

        if(user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;

            const updatedUser = await user.save();

            res.json({
                name: updatedUser.name,
                email: updatedUser.email
            });
        }
        else{
            return res.status(404).json ('User not found')
        }
    },

    //Forgot Password Function
    forgotPassword: async(req, res, next) => {
        //Send Email to the email address entered but check if the email exists
        const { email } = req.body;

        try {
            const user = await User.findOne({ email });

            if(!user) {
                return res.status(404).json ("This email can't be sent");
            }

            //Reset the Token Gen and then add to database the hashed(private) version of Token
            const resetToken = user.getResetPasswordToken();

            await user.save();

            //Create reset url of email to the provided email-address
            const resetUrl = `http://localhost:4000/users/passwordreset/${resetToken}`

            //HTML Message to send to email
            const message = `
            <h1>You have requested a password reset</h1>
            <p>Please go to this link to reset your password:</p>
            <a href = ${resetUrl} clicktracking = off>${resetUrl}</a>
            `;

            try{
                await sendEmail({
                    to: user.email,
                    subject: 'InterApp password reset',
                    text: message,
                });

                res.status(200).json({ success: true, data: `Email Sent to ${email}` })
            }
            catch (err){
                console.log(err);

                user.resetPasswordToken = undefined;
                user.resetPasswordExpire = undefined;

                await user.save();
                return res.status(500).json('Email could not be sent')
            }
        }
        catch (err) {
            next(err);
        }
    },

    //Reset Password Function
    resetPassword: async(req, res, next) => {
        //Compare token in URL params to hashed token
        const resetPasswordToken = crypto
            .createHash('sha256')
            .update(req.params.resetToken)
            .digest("hex");

        try {
            const user = await User.findOne({
                resetPasswordToken,
                resetPasswordExpire: { $gt: Date.now() },
            });

            if(!user) {
                return res.status(400).json("Invalid Token");
            }

            user.password = req.body.password;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            res.status(201).json({
                success: true,
                data: "Password Reset Success",
                token: user.getSignedJwtToken(),
            });
        }
        catch (err) {
            next(err);
        }
    },

    //Logout Function
    logout: async(req, res) => {
        try
        {
            res.clearCookie("token" )
            return res.send('token')
        }
        catch(error)
        {
            return res.status(500).json ({ msg: error.message })
        }
    }
}

module.exports = authControl