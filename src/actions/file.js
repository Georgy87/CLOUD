import axios from "axios";
import { setFile, addFile } from "../reducers/fileReducer";

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
            dispatch(setFile(response.data));
        } catch (error) {
            console.log(error.response.data.message);
        }
    };
}

export function createDir(dirId) {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                `http://localhost:5000/api/files`,
                {
                    name: name,
                    parent: dirId,
                    type: 'dir'
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(addFile(response.data));
        } catch (error) {
            console.log(error.response.data.message);
        }
    };
}
