import React from 'react';

import { updateNewMessageActionCreator, addMessageActionCreator } from '../../Rdeux/dialogs-reducer';

import Dialogs from './Dialogs';


function DialogsContainer(props) {

    let state = props.store.getState();

    function addMessage() {
        props.store.dispatch(addMessageActionCreator());
    }

    function onMessageChange(body) {
        props.store.dispatch(updateNewMessageActionCreator(body));
    }

    return <Dialogs state={state}
        addNewMessage={addMessage}
        onChange={onMessageChange}
    />
}
export default DialogsContainer;