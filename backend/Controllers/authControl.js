//Import Statements
const crypto = require("crypto")
const User = require("../Models/user")
const asyncHandler = require("express-async-handler")
const { generateToken } = require("../utils/generateToken")

const authControl = {
    
    //Register Function
    register: asyncHandler(async (req, res, next) => 
    {
        const { userName, email, password } = req.body

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
    })
}

module.exports = authControl