import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import '../Pages/CSS/navbar.css'
//import Logo from '../Images/logo1.svg'
// import { NavDropdown } from 'react-bootstrap'
// import { Nav, 
//          NavLink,
//          Bars, NavMenu
//        } from './NavbarElements'
  

const Navbar = () => {


    return (

        <nav>
            <div className = 'nav-wrapper white' >
                <Link to = '/' className = 'brand-logo-left'>
                    IA 
                </Link>
                <ul id = 'nav-mobile' className = 'right'>
                    <li></li>
                </ul>
            </div>
        </nav>

        // <>
        //     <Nav>
        //             <NavLink to = "/">
        //                 <h1 className = "logo" >
        //                     IA
        //                 </h1>
        //             </NavLink>

        //             <Bars />

        //         <NavDropdown id = 'collasible-nav-dropdown' >
        //             <NavMenu className = "navMenu">
        //                 <NavLink to = "/about" activeStyle>
        //                     About
        //                 </NavLink>

        //                 <NavLink to = "/services">
        //                     Services
        //                 </NavLink>

        //                 <NavLink to = "/contactUs">
        //                     Contact Us
        //                 </NavLink>
        //             </NavMenu>
        //         </NavDropdown>
        //     </Nav>
        // </>
    )
}

export default Navbar
