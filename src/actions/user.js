import axios from "axios";

export const registration = async (email, password) => {
    try {
        const result = await axios.post('http://localhost:5000/api/auth/registration', {
            email,
            password
        });
        return console.log(result);
    } catch (error) {
        console.log(error);
    }
}