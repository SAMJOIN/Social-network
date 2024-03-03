import React from 'react';
import styles from './Dialogs.module.css'
import Message from './Message';
import Dialog from './Dialog';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

function Dialogs(props) { // В пропсах messages и dialogs

    let state = props.state;

    let dialogsElement = state.dialogsPage.dialogs.map((el) => <Dialog id={el.id} name={el.name} />) // Преобразование массива объектов в массив элементов

    let messagesElement = state.dialogsPage.messages.map((el) => <Message id={el.id} message={el.message} />) // Преобразование массива объектов в массив элементов

    const onSubmit = (formData) => {
        props.addMessage(formData.newMessageBody)
    }

    if (!props.isAuth) return <Navigate to={'/Login'} />

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                {dialogsElement}                {/* Отображение массива элементов */}
            </div>
            <div className={styles.messageList}>
                {messagesElement}               {/* Отображение массива сообщений */}
                <NewMessageFormRedux onSubmit={onSubmit} />
            </div>
        </div>
    );
}

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.newMessageArea}>
            <Field className={styles.textarea} component='textarea' name='newMessageBody' placeholder='Enter message' />
            <button className={styles.btn} type='submit'>Send</button>
        </form>
    );
}

const NewMessageFormRedux = reduxForm({ form: 'newMessageForm' })(NewMessageForm)

export default Dialogs;