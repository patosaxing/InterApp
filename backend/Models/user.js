//Import Statements
const crypto = require("crypto")  //supports calculating hashes, authentication
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//Declares and Imports Schema from Mongoose
const UserSchema = mongoose.Schema(
    {
        userName: { type: String, required: true, unique: true},

        email: { type: String, lowercase: true, unique: true,
                 index: true, required:[true, "cant't be blank"],
                 match: [/\S+@\S+\.\S+/, "is invalid"]},

        password: { type: String, required: true, minLength: 6},

        firstName: { type: String, required: true, trim: true,
                     maxLength: 25},

        lastName: { type: String, required: true, trim: true,
                    maxLength: 25},

        resetPasswordToken: String,
        resetPasswordExpire: Date,
                    
    },
    {
        timestamps: true,
    }
)

UserSchema.methods.matchPassword = async function (enteredPassword) 
{
    // console.log(this)
    // console.log(enteredPassword, this.password)
    return await bcrypt.compare(enteredPassword, this.password)
}

//Hash password right from the beginning
UserSchema.pre("save", async function (next)
{
    if(!this.isModified("password"))
    {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

UserSchema.methods.getSignedJwtToken = () =>
{
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE
        })
}

UserSchema.methods.getResetPasswordToken = () =>
{
    const resetToken = crypto.randomBytes(20).toString("hex")

    //Hash tokens and saves to database
    this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex")

    //Set Expired Token date
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000)

    return resetToken

}

const User = mongoose.model("User", UserSchema)

module.exports = User;