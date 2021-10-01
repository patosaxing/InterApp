import React from 'react'
//import { Container, Row, Col } from "react-bootstrap"
import '../Pages/CSS/footer.css'

const footer = () => {
    return (
       <footer>
           <div className = "row text-center">
                {/* <div class = "footer-content">
                    <h3>International Application</h3>
                    <br />
                    <p>Where students take their dreams to the next level</p>
                    <br />
                </div> */}
                <div class = "footer-bottom">
                    <p>
                        &copy;{new Date().getFullYear()} International Application
                    </p>
                </div>

           </div>
       </footer>
    )
}

export default footer
