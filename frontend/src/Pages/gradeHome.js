import React from 'react';
import '../Pages/CSS/home.css';
import { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
//import { login } from '../actions/action.auth';
//import { FaMarsDouble } from 'react-icons/fa';
//import { useDispatch } from 'react-redux' 
//import Login  from '../../../backend/Controllers/authControl';

const GradeHome = () =>
{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const history = useHistory();

    const submitHandler = async (e) =>
    {
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
            window.location = '/Profile'
            console.log(data)
            localStorage.setItem("userInfo", JSON.stringify(data))

            

            setLoading(false)

         } 
        catch (error) {
            setError(error.response.data.message)
        }
        console.log(email, password)
    }

    // useEffect(() => {
    //     if(userInfo){
    //         history.push("/Profile")
    //     }         
    //  }, [history, userInfo])
    
    return (
        <div>
            <form action = "" className = "form1"
             onSubmit = {submitHandler} >
                <input 
                type = "email"
                value = {email} 
                placeholder = "Email" 
                onChange = {(e) => setEmail(e.target.value)}
                autoComplete = "on" />
                <br />

                <input 
                type = "password"
                value = {password} 
                placeholder = "Password" 
                onChange = {(e) => setPassword(e.target.value)}
                autoComplete = "off" />
                <br />

                
                <button type = "submit">
                    Log In
                </button> 
                <br />

                <Link to = "/register">
                <button className = "btn2">
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


export default GradeHome;