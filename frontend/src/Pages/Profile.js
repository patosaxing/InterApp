import { React, useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

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
        {
            userProfile && (
                <h1> Welcome {userProfile.userName}</h1>
            )
        }
    </div>

)
}

export default Profile