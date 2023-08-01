import React from 'react';
import styles from './Dialogs.module.css'
import Message from './Message';
import Dialog from './Dialog';

function Dialogs(props) { // В пропсах messages и dialogs

    let state = props.state;

    let dialogsElement = state.dialogsPage.dialogs.map((el) => <Dialog id={el.id} name={el.name} />) // Преобразование массива объектов в массив элементов

    let messagesElement = state.dialogsPage.messages.map((el) => <Message id={el.id} message={el.message} />) // Преобразование массива объектов в массив элементов

    let textArea = React.createRef();

    function addMessage() {
        props.addMessage();
    }

    function onMessageChange(event) {
        let body = event.target.value;
        props.onMessageChange(body);
    }
    

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                {dialogsElement}                {/* Отображение массива элементов */}
            </div>
            <div className={styles.messageList}>
                {messagesElement}               {/* Отображение массива сообщений */}
                <div className={styles.newMessageArea}>
                    <textarea className={styles.textarea}
                        ref={textArea}
                        onChange={onMessageChange}
                        value={props.newMessage}
                        placeholder='Enter your message'    
                    />
                    <button className={styles.btn} onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;