import { compose } from 'redux';
import { addMessageActionCreator } from '../../Rdeux/dialogs-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import Dialogs from './Dialogs';

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        state: state,
        newMessage: state.dialogsPage.newMessage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody));
        },
    }
}

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);


export default DialogsContainer;