import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'
import Message from './Message';
import Dialog from './Dialog';



function Dialogs(props) { // В пропсах messages и dialogs

    let dialogsElement = props.dialogs.map((el) => <Dialog id={el.id} name={el.name} />) // Преобразование массива объектов в массив элементов

    let messagesElement = props.messages.map((el) => <Message id={el.message} message={el.message} />) // Преобразование массива объектов в массив элементов

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                {dialogsElement}                {/* Отображение массива элементов */}
            </div>
            <div className={styles.messageList}>
                {messagesElement}               {/* Отображение массива сообщений */}
            </div>
        </div>
    );
}
export default Dialogs;