const defaultState = {
    user: {},
    isAuth: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case "SET-USER" :
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        case "LOGOUT" :
            localStorage.removeItem('token');
            return {
                ...state,
                user: {},
                isAuth: false
            }
        default :
            return state
    }
}

export const setUser = (user) => {
    return {
        type: "SET-USER",
        payload: user
    }
}

export const logout = () => {
    return {
        type: "LOGOUT",
    }
}