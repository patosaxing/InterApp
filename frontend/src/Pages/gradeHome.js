import React from 'react'
//import './CSS/home.css'
//import Navbar from '../Components/Navbar'

const gradeHome = () =>
{
    return (
        <div>

                <h1 style = {{color: '#FF4040', fontSize: '60px',
                marginLeft: '350px', marginTop: '200px', justifyContent: 'left'}}> InterApp </h1>

                <p style = {{marginLeft: '350px', fontSize: '35px'}}>Find your path</p>

                <div className = 'form-content-right'>
                    <form className = 'form'>
                        <div className = 'form-inputs'>

                            <label htmlFor = 'email' className = 'form-label'>
                            <input type = 'email' name = 'email' className = 'form-input'
                            placeholder = 'Email Address' />
                            </label>

                        </div>

                        <div className = 'form-inputs'>
                            
                            <label htmlFor = 'password' className = 'form-label'>
                            <input type = 'password' name = 'password' className = 'form-input'
                            placeholder = 'Password' />
                            </label>

                        </div>
                        
                        <button className = 'form-input-btn' type = 'submit'>
                            Log In
                        </button>

                        <span className = 'form-input-register'>
                            Don't have an account <a href = '#'> Register </a> 
                        </span>
                    </form>

                </div>
        </div>
    )
}

export default gradeHome