import React from 'react'
import NavbarApp from '../Components/NavbarApp'
//import './CSS/home.css'


const gradeAbout = () => {
    return (
        <div>
            <NavbarApp/>
            <div style = {{display: 'flex', justifyContent: 'center',
                alignItems: 'center', height: '90vh'}}>
                    <h1> About </h1>
            </div>
        </div>
    )
}

export default gradeAbout
