import React from 'react';
import '../Pages/CSS/home.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
import axios from 'axios';
import { login } from '../actions/action.auth';
//import { FaMarsDouble } from 'react-icons/fa';
//import { useDispatch } from 'react-redux' 
//import Login  from '../../../backend/Controllers/authControl';

const GradeHome = ( {login} ) =>
{
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const onChange = (e) => setLoginData ({
        ...loginData, [e.target.email]: e.target.value
    })

    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password)
    }

    const { email, password } = loginData;

    return (
        <div>
            <form action = "" className = "form" onSubmit = {(e) => onSubmit(e)}>
                <input type = "text" placeholder = "Email" onChange = {(e) => onChange (e)}
                autoComplete = "on" />
                <br />

                <input type = "password" placeholder = "Password" onChange = {(e) => onChange (e)}
                autoComplete = "on" />
                <br />

                <Link to = "/login">
                <button type = "submit">
                    Log In
                </button>
                </Link>
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
export {login};