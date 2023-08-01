const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initState = {
    posts: [
        { id: '1', message: 'Hi', likeCount: 23 },
        { id: '2', message: 'How are you?', likeCount: 10 },
        { id: '3', message: 'I am SAMJOIN', likeCount: 123 }
    ],
    newPostText: ""
}

const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: '5', message: state.newPostText, likeCount: '0' }],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;