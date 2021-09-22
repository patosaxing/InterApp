import React from 'react'
//import './CSS/home.css'
//import Navbar from '../Components/Navbar'

const gradeHome = () =>
{
    return (
        <div style = {{ alignItems: 'top', height: '90vh'}}>

                <h1 style = {{color: '#FF4040', fontSize: '60px',
                marginLeft: '500px', marginTop: '200px', justifyContent: 'left'}}> InterApp </h1>

                <p style = {{marginLeft: '500px', fontSize: '35px'}}>Find your path</p>

               <button style = {{ backgroundColor: '#FF4040', color: '#000'}}>
                    Log In 
               </button>
        </div>
    )
}

export default gradeHome