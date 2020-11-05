const initialState = {
    isVisible: [],
    files: [],
};

export default function uploadReducer(state = initialState, action) {
    switch (action.type) {
        case "SHOW-UPLOADER":
            return {
                ...state,
                isVisible: true,
            };
        case "HIDE-UPLOADER":
            return {
                ...state,
                isVisible: false,
            };
        case "ADD-UPLOAD-FILE":
            return {
                ...state,
                files: [
                    ...state.files,
                    action.payload,
                ],
            };
        case "DELETE-UPLOAD-FILE":
            return {
                ...state,
                files: [
                    ...state.files.filter((file) => file.id != action.payload),
                ],
            };
        case "CHANGE_UPLOAD_FILE":
            return {
                ...state,
                files: [
                    ...state.files.map((file) =>
                        file.id == action.payload.id
                            ? { ...file, progress: action.payload.progress }
                            : { ...file }
                    ),
                ],
            };
        default:
            return state;
    }
}

export const showUploader = () => {
    return {
        type: "SHOW-UPLOADER",
    };
};
export const hideUploader = () => {
    return {
        type: "HIDE-UPLOADER",
    };
};
export const addUploaderFile = (file) => {
    console.log(file);
    return {
        type: "ADD-UPLOAD-FILE",
        payload: file,
    };
};
export const removeUploaderFile = (fileId) => {
    return {
        type: "DELETE-UPLOAD-FILE",
        payload: fileId,
    };
};
export const changeUploaderFile = (payload) => {
    return {
        type: "CHANGE_UPLOAD_FILE",
        payload: payload,
    };
};
