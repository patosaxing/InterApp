//Import Statements
const crypto = require("crypto")
const User = require("../Models/user")
const asyncHandler = require("express-async-handler")
const { generateToken } = require("../utils/generateToken")

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

    updateUserProfile: async(req, res) => {
        const id = req.user._id;
        const user = await User.findById(req.user._id);

        if(user) {
            user.userName = req.body.userName || user.userName;
            user.email = req.body.email || user.email;
        }
    }
}

module.exports = authControl