import { React, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Profile = () => {
    const [userProfile, setUserProfile] = useState(
        {
        _id: "6169308ae7a55c5230e9a05e",
        userName: 'Zeolani',
        email: 'diza@yahoo.com',
        password: '$2b$10$Vsx09MvxOI4OPx3tLgSBjOdhw8C.gfGgPkOldwNG2tVl2JNdhRfHC',
        firstName: 'Diza',
        lastName: 'Amedu-Ode',
        __v: 0 
    }
    );

    useEffect(() => {
        //axios to call backend /profile
        //assign the result of /profile to userProfile state
        // const data = axios.get("/profile");
        // setUserProfile(data);
        console.log("effect loaded")
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