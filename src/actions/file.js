import axios from "axios";
import { setFile, addFile, deleteFile } from "../reducers/fileReducer";

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

export function createDir(dirId, name) {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                `http://localhost:5000/api/files`,
                {
                    name: name,
                    parent: dirId,
                    type: "dir",
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

export function uploadFile(file, dirId) {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            
            if (dirId) {
                formData.append("parent", dirId);
            }
            const response = await axios.post(
                `http://localhost:5000/api/files/upload`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                    onUploadProgress: (progressEvent) => {
                        const totalLength = progressEvent.lengthComputable
                            ? progressEvent.total
                            : progressEvent.target.getResponseHeader(
                                  "content-length"
                              ) ||
                              progressEvent.target.getResponseHeader(
                                  "x-decompressed-content-length"
                              );
                        console.log("total", totalLength);
                        if (totalLength) {
                            let progress = Math.round(
                                (progressEvent.loaded * 100) / totalLength
                            );
                            console.log(progress);
                        }
                    },
                }
            );
            console.log(response.data);
            dispatch(addFile(response.data));
        } catch (e) {
            alert(e.response.data.message);
        }
    };
}

export async function downloadFile(file) {
    const response = await fetch(
        `http://localhost:5000/api/files/download?id=${file._id}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }
    );
    if (response.status === 200) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        console.log(link.href)
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    console.log(response);
}

export function deleteFiles(file) {
    console.log(file)
    return async (dispatch) => {
        try {
            const response = await axios.delete(
                `http://localhost:5000/api/files?id=${file._id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            dispatch(deleteFile(file._id));
            console.log(response.data.message)
        } catch (error) {
            console.log(error.response.data.message);
        }
    };
}
