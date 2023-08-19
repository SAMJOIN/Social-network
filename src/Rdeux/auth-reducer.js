const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

let initState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setUserAuthData = (userId, login, email) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {userId, login, email}
    }
}


export default authReducer;