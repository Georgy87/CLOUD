import axios from "axios";
import { setUser } from "../reducers/userReducer";

export const registration = async (email, password) => {
    try {
        const result = await axios.post(
            "http://localhost:5000/api/auth/registration",
            {
                email,
                password,
            }
        );
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            const result = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email,
                    password,
                }
            );

            localStorage.setItem("token", result.data.token);
            return dispatch(setUser(result.data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const auth = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get(
                "http://localhost:5000/api/auth/auth",
                { headers: { Authorization : `Bearer ${localStorage.getItem('token')}`}}
            );
            dispatch(setUser(result.data));
            localStorage.setItem("token", result.data.token);
        } catch (error) {
            console.log(error);
            localStorage.removeItem('token');
        }
    };
};

