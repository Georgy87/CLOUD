const initialState = {
    files: [],
    current: null,
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
        default:
            return state;
    }
}

export const setFile = (files) => {
    return {
        type: "SET-FILE",
        payload: files
    };
};

export const setCurrent = (current) => {
    return {
        type: "SET-CURRENT",
        payload: current
    };
};

export const addFile= (file) => {
    console.log(file)
    return {
        type: "ADD-FILE",
        payload: file
    };
};
