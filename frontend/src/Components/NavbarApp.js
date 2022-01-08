import React, { useState, useEffect } from 'react'
import '../Pages/CSS/navbar.css'
import {Nav, Navbar, NavDropdown, Container, 
        Form, FormControl, Button} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Profile from '../Pages/Profile'
import axios from 'axios'
// import {  
//          NavLink,
//          Bars, NavMenu
//        } from './NavbarElements'
  

const NavbarApp = () => {

    let history = useHistory();

    const[navProfile, setNavProfile] = useState(
        {
            userName: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            __v: 0 
    });

    useEffect(() => {
        //axios to call backend /profile
        //assign the result of /profile to userProfile state
        const getUserProfile = async () => {

        const userInfo = localStorage.getItem('userInfo')
        const user = JSON.parse(userInfo)
        console.log(user)
        const data = await axios.get("http://localhost:4000/users/profile", {
            headers: {
                authorization: 'Bearer ' + user.token
            }
        })
        console.log(data)
        setNavProfile(data.data);
        console.log("effect loaded")
        }
        getUserProfile()
    }, [])
    

    const logout = async () =>{ 
        localStorage.setItem('userInfo', '')
        history.push('/')
    }

    const renderList = () =>{

        if(Profile){
            return[
                        <ul className = 'dropdown1'>

                           <li><a href = '/profile'>{navProfile.userName}</a></li>       
                                        <li><a href = '/convert'>Convert</a></li>
                                        <li><a href = '/about'>About</a></li>
                                        <li><a href = '/' onClick = {logout}>Log Out</a></li>          
                        </ul>  
                      
            ]
        }
        else{
            return[
                <li className = 'dropdown2'>

                    <Link to = '/Login'>Login</Link>
                    <Link to = '/register'>Register</Link>

                </li>
            ]
        }
    }

    return (
        
        <Nav className = "navbar-navbar-default">
           <Navbar>
            <div className = "container-fluid">
                <div className = "navbar-header">
                    <Link>
                        <a className = "navbar-brand" href = "/">IA</a>
                    </Link>
                </div>

                <div className = 'contain'>
                <ul className = "nav-navbar-nav">
                        {renderList()}
                </ul>
                </div>
            </div>
            </Navbar> 
        </Nav>

        //  <>
        //    <Nav>
        //          <Navbar>
        //              <NavLink to = "/">
        //                  <h1 className = "logo" >
        //                      IA
        //                  </h1>
        //              </NavLink>

        //              <Bars />

        //          <NavDropdown id = 'collasible-nav-dropdown' >
        //              <NavMenu className = "navMenu">

        //                  {renderList()} 
        //                  <NavLink to = "/about" activeStyle>
        //                     About
        //                 </NavLink>

        //                 <NavLink to = "/services">
        //                     Services
        //                 </NavLink>

        //                 <NavLink to = "/contactUs">
        //                     Contact Us
        //                 </NavLink> 
        //             </NavMenu>
        //        </NavDropdown>
        //          </Navbar>
        //      </Nav>
        //  </> 
    )
}

export default NavbarApp
