const initialState = {
    files: [],
    current: null,
    dirStack: [],
    view: "list",
};

export default function fileReducer(state = initialState, action) {
    switch (action.type) {
        case "SET-FILE":
            return {
                ...state,
                files: action.payload,
            };
        case "SET-CURRENT":
            return {
                ...state,
                current: action.payload,
            };
        case "ADD-FILE":
            return {
                ...state,
                files: [...state.files, action.payload],
            };
        case "DELETE-FILE":
            return {
                ...state,
                files: [
                    ...state.files.filter(
                        (file) => file._id !== action.payload
                    ),
                ],
            };
        case "PUSH_TO_STACK":
            return {
                ...state,
                dirStack: [...state.dirStack, action.payload],
            };
        case "SET_VIEW":
            return {
                ...state,
                view: action.payload,
            };
        default:
            return state;
    }
}

export const setFile = (files) => {
    return {
        type: "SET-FILE",
        payload: files,
    };
};

export const setCurrent = (current) => {
    return {
        type: "SET-CURRENT",
        payload: current,
    };
};

export const addFile = (file) => {
    return {
        type: "ADD-FILE",
        payload: file,
    };
};

export const deleteFile = (fileId) => {
    return {
        type: "DELETE-FILE",
        payload: fileId,
    };
};

export const pushToStack = (dir) => {
    return {
        type: "PUSH_TO_STACK",
        payload: dir,
    };
};

export const setFileView = (payload) => {
    return {
        type: "SET_VIEW",
        payload: payload,
    };
};
