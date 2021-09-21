import React from 'react'
import { Nav, 
    NavLink, 
    Bars, 
    NavMenu } from './NavbarElements'

import '../Images/logo1.svg'    

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to = "/">
                   <img src = {require('../Images/logo1.svg')} alt = 'IA' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to = "/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to = "/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to = "/contactUs">
                        Contact Us
                    </NavLink>
                    {/* <NavLink to = "/signUp">
                        Sign Up
                    </NavLink> */}
                    
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to = "/signIn">
                        Sign In
                    </NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    )
}

export default Navbar
