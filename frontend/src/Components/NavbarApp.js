import React, { useState } from 'react'
import '../Pages/CSS/navbar.css'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Profile from '../Pages/Profile'
// import { NavDropdown } from 'react-bootstrap'
// import { Nav, 
//          NavLink,
//          Bars, NavMenu
//        } from './NavbarElements'
  

const NavbarApp = () => {
    const renderList = () =>{
        if(Profile){
            return[
                
                    <li>
                        <Link to = '/profile'>Profile</Link>

                        <Link to = '/convert'>Convert</Link>

                        <Link to = '/about'>About</Link>
                    </li>
            ]
        }
        else{
            return[
                <li>
                    <Link to = '/Login'>Login</Link>

                    <Link to = '/register'>Register</Link>
                </li>
            ]
        }
    }

    return (
        <header>
           <div className = 'navbar'>
                <Navbar bg = "myWhiteish" variant = "dark">
                    <Navbar.Brand>
                        <Link to = '/'> 
                            IA
                        </Link>
                    </Navbar.Brand>
                    <ul id = 'nav-mobile' className = 'right'>
                        {renderList()}
                    </ul>
                </Navbar>
           </div>
        </header>
        
        
        
        // <nav>
        //     <div className = 'nav-wrapper white' >
        //         <Link to = '/' className = 'brand-logo-left'>
        //             IA 
        //         </Link>
        //         <ul id = 'nav-mobile' className = 'right'>
        //             <li></li>
        //         </ul>
        //     </div>
        // </nav>

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

export default NavbarApp
