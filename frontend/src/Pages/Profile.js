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
            
            <div className = 'Subject'>
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

                    <select className = "form-control" id = "Electives1">

                    <option value = 'Electives'>Languages</option>
                    <option>Igbo</option>
                    <option>Yoruba</option>
                    <option>Hausa</option>
                    <option>Edo</option>
                    </select>
                </div>
                <br />
                
                <div className = "btns">
                    <button className = 'profileBtn1'>Total</button>
                    <br/>

                    <button className = 'profileBtn2'>Average</button>
                    <br/>

                    <button className = 'profileBtn3'>Grade</button> 
                </div> 

            </div>

            <div className = 'result'>
                    <div className = 'head1'> <h1>Total</h1> </div>

                        <div className = 'total'>

                        </div>

                    <div className = 'head2'> <h1>Average</h1> </div>

                        <div className = 'ave'>

                        </div>

                    <div className = 'head3'> <h1>Grade</h1> </div>
                    
                        <div className = 'grade'>

                        </div>
                </div>
        
        
    </div>

)
}

export default Profile