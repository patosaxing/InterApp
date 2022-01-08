import React from 'react'
import NavbarApp from '../Components/NavbarApp';
//import { makeStyles } from '@material-ui/core/styles'

const GradeConvert = () => {
    return (

        // <div>
        //     <NavbarApp/>
        //     <div style = {{display: 'flex', justifyContent: 'center',
        //         alignItems: 'center', height: '90vh'}}>
        //             <h1> Convert </h1>
        //     </div>
        // </div>

        <div id = "main">
            <NavbarApp/>
            <div id = "head" style = {{display: 'flex', justifyContent: 'center',
                alignItems: 'center', height: '90vh'}}>

                <h1> Grading System </h1>

                 <label>English</label> 
                <input type = "text" /><br />

                <label>Mathematics</label>
                <input type = "text" /><br />

                <label>Computer</label>
                <input type = "text" /><br />

                <label>Sciences</label>
                <input type = "text" /><br />

                <button>Total</button>
                <button>Average</button>
                <button>Grade</button> 

             </div>
         </div>
    )
}

export default GradeConvert;
