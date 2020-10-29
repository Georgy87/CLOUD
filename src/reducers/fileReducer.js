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
