import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS,
         LOGIN_FAILED, 
         REGISTER_SUCCESS, REGISTER_FAILED,
         AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILED,
         LOGOUT_USER 
} from "./action.types";

export const login = (email, password) => async(dispatch) => {
    try
    {
        dispatch({
            type: LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type' : 'application/json',
            }
        }

        const { data } = await axios.post(
            'users/login',
            { email, password },
            config
        )
        //console.log("data from login route", data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }
    catch(error)
    {
        dispatch({
            type: LOGIN_FAILED
        })
    }
}