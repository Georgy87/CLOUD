const initialState = {
    loader: false,
};

export default function loaderReducer(state = initialState, action) {
    switch (action.type) {
        case "SHOW_LOADER":
            return { ...state, loader: true };
        case "HIDE_LOADER":
            return { ...state, loader: false };
        default:
            return state;
    }
}

export const showLoader = () => {
    return {
        type: "SHOW_LOADER"
    }
}

export const hideLoader = () => {
    return {
        type: "HIDE_LOADER"
    }
}
