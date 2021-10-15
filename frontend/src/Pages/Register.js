import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../Pages/CSS/register.css'
import { Row, Col } from 'react-bootstrap'

const Register = () => 
{
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) =>
    {
        e.preventDefault();

        try 
        {
            const config = 
            {
                headers:{
                    "Content-type" : "application/json"
                }
            }
            
            setLoading(true)

            const { data } = await axios.post('http://localhost:4000/users/register',
            {
                userName, email, password, firstName, lastName
            },
            config)

            console.log(data)
            localStorage.setItem("userInfo", JSON.stringify(data))
            setLoading(false)
        } 
        catch (error) 
        {
            setError(error.response.data.message)
        }
    }

    return (
        <div>
            <form action = "" className = "form2"
             onSubmit = {submitHandler} >
                <input 
                 type = "text"
                 value = {firstName}
                 placeholder = "First Name"
                 onChange = {(e) => setFirstName(e.target.value) }
                 autoComplete = "on"   
                />
                <br />

                <input 
                  type = "text"
                  value = {lastName}
                  placeholder = "Last Name"
                  onChange = {(e) => setLastName(e.target.value)}
                  autoComplete ="on"
                />
                <br />

                <input 
                 type = "email1"
                 value = {email}
                 placeholder = "Email"
                 onChange = {(e) => setEmail(e.target.value)}
                 autoComplete = "on"
                />
                <br />

                <input 
                  type = "text"
                  value = {userName}
                  placeholder = "UserName"
                  onChange = {(e) => setUserName(e.target.value)}
                  autoComplete = "on"  
                />
                <br />

                <input 
                  type = "password1"
                  value = {password}
                  placeholder = "Password"
                  onChange = {(e) => setPassword(e.target.value)}
                />
                <br />

                <button type = "submit" className = "button1">
                    Register
                </button>
                <br />

                <Row className = 'row'>
                    <Col>
                        Have an Account ? <Link to = "/login">Login</Link>
                    </Col>
                </Row>

            </form>
        </div>
    )
}

export default Register
