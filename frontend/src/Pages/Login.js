import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Pages/CSS/login.css'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) => {

        e.preventDefault();

        try {
            const config = {
                headers:{
                    "Content-type" : "application/json"
                }
            }

            setLoading(true)

            const { data } = await axios.post('http://localhost:4000/users/login',
            {
                email, password,
            },
            config);
            window.location = './Profile'
            console.log(data)
            localStorage.setItem("userInfo", JSON.stringify(data))
            setLoading(false)
        } 
        catch (error) {
            setError(error.response.data.message)
        }
        console.log(email, password)
    }

    return (

        <div>
           <form action = "" className = "form3"
             onSubmit = {submitHandler} >
                <input 
                type = "email2"
                value = {email} 
                placeholder = "Email" 
                onChange = {(e) => setEmail(e.target.value)}
                autoComplete = "on" />
                <br />

                <input 
                type = "password2"
                value = {password} 
                placeholder = "Password" 
                onChange = {(e) => setPassword(e.target.value)}
                autoComplete = "off" />
                <br />

                
                <button type = "submit" className = "button2">
                    Log In
                </button> 
                <br />

                <Link to = "/register">
                <button className = "btn3">
                    Create Account
                </button>
                </Link>

                <div className = "line"></div>
                <br />

                <a href = "" className = "f-pws">
                    Forget Password
                </a>
                <br />

            </form>
        </div>
    )
    }

export default Login
