
import axios from "axios";

export function getFiles(dirId) {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/files${
                    dirId ? "?parent=" + dirId : ""
                }`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            console.log(response);
        } catch (error) {
            console.log(error.response.data.message);
        }
    };
}
