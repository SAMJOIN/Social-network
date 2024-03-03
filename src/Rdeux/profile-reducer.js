import { profileAPI, userAPI } from "../api/api"
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initState = {
    posts: [
        { id: '1', message: 'Hi', likeCount: 23 },
        { id: '2', message: 'How are you?', likeCount: 10 },
        { id: '3', message: 'I am SAMJOIN', likeCount: 123 }
    ],
    newPostText: "",
    profile: null,
    status: ""
}

const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [{ id: '5', message: action.newPostBody, likeCount: '0' }, ...state.posts],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostBody) => {
    return {
        type: ADD_POST,
        newPostBody
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    return userAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response));
        });
}
export const getStatus = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response));
        });
}
export const updateStatus = (status) => (dispatch) => {
    return profileAPI.updateStatus(status)
        .then(response => {
            dispatch(setStatus(status));
        });
}

export default profileReducer;