import React from 'react'
import '../Pages/CSS/navbar.css'
//import Logo from '../Images/logo1.svg'
import { Nav, 
         NavLink, 
         Bars, NavMenu
       } from './NavbarElements'

  

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to = "/">
                    <h1 className = "logo" >
                        IA
                    </h1>
                </NavLink>

                <Bars />

                <NavMenu className = "navMenu">
                    <NavLink to = "/about" activeStyle>
                        About
                    </NavLink>

                    <NavLink to = "/services">
                        Services
                    </NavLink>

                    <NavLink to = "/contactUs">
                        Contact Us
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
