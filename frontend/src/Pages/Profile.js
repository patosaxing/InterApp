import { React, useState, useEffect } from "react";
import axios from "axios";
import NavbarApp from "../Components/NavbarApp";
import './CSS/profile.css';
//import { Navbar } from "react-bootstrap";
//import { useHistory, useParams } from "react-router-dom";

const Profile = () => {
    const [userProfile, setUserProfile] = useState(
        {
        _id: "",
        userName: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        __v: 0 
    }
    );

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
        setUserProfile(data.data);
        console.log("effect loaded")
        }
        getUserProfile()
    }, [])

return (
    <div>
        <NavbarApp/>
        {
            userProfile && (
                <h1 className = 'header1'> Welcome {userProfile.userName}</h1>
            )
            }

    <div className = "wrapper">
        <h2>GP Calculator</h2>
    </div>

        {/* <form>
            <div className = 'form-group0'>
                <label>Mathematics</label>
                    <input type = 'number' className = 'form-control' id = 'input1' 
                     placeholder = 'Mathematics' />
                     <br/>

                <label>English</label>
                    <input type = 'number' className = 'form-control' id = 'input1' 
                     placeholder = 'English' />
                     <br/>

                <label>Sciences</label>
                    <input type = 'number' className = 'form-control' id = 'input1' 
                     placeholder = 'Sciences' />
                     <br/>

                <label>Social Studies</label>
                    <input type = 'number' className = 'form-control' id = 'input1' 
                     placeholder = 'Social Studies' />
                     <br/>

                <label>Electives</label>
                    <input type = 'number' className = 'form-control' id = 'input1' 
                     placeholder = 'Electives' />
                     <br/>

                <label>Electives</label>
                <select class = "form-control" id = "Electives1">
                    <option value = 'Electives'>Languages</option>
                    <option>Igbo</option>
                    <option>Yoruba</option>
                    <option>Hausa</option>
                    <option>Edo</option>
                </select>

                <button className = 'btn1'>Total</button>
                <br />

                <button className = 'btn2'>Average</button>
                <br />

                <button className = 'btn3'>Grade</button>

            </div>

        </form>     */}
            
             <div>
                <div className = "lbls">
                  <label>English</label> 
                    <input type = "text" /><br />

                 <label>Mathematics</label>
                    <input type = "text" /><br />

                 <label>Computer</label>
                    <input type = "text" /><br />

                 <label>Sciences</label>
                    <input type = "text" /><br />

                 <label>Electives</label>

                    <select class = "form-control" id = "Electives1">
                        
                    <option value = 'Electives'>Languages</option>
                    <option>Igbo</option>
                    <option>Yoruba</option>
                    <option>Hausa</option>
                    <option>Edo</option>
                    </select>
                </div>
                <br />

                <div className = "btns">
                    <button>Total</button>
                    <br/>

                    <button>Average</button>
                    <br/>

                    <button>Grade</button> 
                </div>
             </div>
        
        
    </div>

)
}

export default Profile