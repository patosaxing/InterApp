import React from 'react'

const gradeConvert = () => {
    return (
        <div id = "main">
            <div id = "head">
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

export default gradeConvert;
