import React from 'react'
import '../Pages/CSS/home.css'
//import Navbar from '../Components/Navbar'

const gradeHome = () =>
{
    return (
        <div>
            <form action = "" className = "form">
                <input type = "text" placeholder = "Email" />
                <br />

                <input type = "password" placeholder = "Password" />
                <br />

                <button type = "submit">
                    Log In
                </button>
                <br />

                <button className = "btn2">
                    Create Account
                </button>

                <div className = "line"></div>
                <br />

                <a href = "" className = "f-pws">
                    Forget Password
                </a>
                <br />

            </form>

            <div className = "inter">
                <h1 className = "header">
                    InterApp
                </h1> 

            <p className = "paragraph1">
                    Find your path
            </p>
            </div>
        </div>
    )
}

export default gradeHome