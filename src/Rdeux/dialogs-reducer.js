const ADD_MESSAGE = 'ADD-MESSAGE'

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
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, { id: '4', message: action.newMessageBody }]
            }; 
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer;