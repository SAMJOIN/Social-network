const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initState = {
    messages: [
        { id: '1', message: 'Hi' },
        { id: '2', message: 'Hello' },
        { id: '3', message: 'How a y?' }
    ],
    newMessage: '',
    dialogs: [
        { id: '1', name: 'Dima' },
        { id: '2', name: 'Nikita' },
        { id: '3', name: 'Vlada' }
    ]
}



const dialogsReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: '4',
                message: state.newMessage
            };
            state.messages.push(message);
            state.newMessage = "";
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: text
    }
}

export default dialogsReducer;