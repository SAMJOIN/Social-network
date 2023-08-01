import { updateNewMessageActionCreator, addMessageActionCreator } from '../../Rdeux/dialogs-reducer';

import Dialogs from './Dialogs';

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        state: state,
        newMessage: state.dialogsPage.newMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (body) => {
            dispatch(updateNewMessageActionCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;