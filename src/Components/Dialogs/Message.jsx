import styles from './Dialogs.module.css'
function Message(props) {
    return (
        <div className={styles.messageBar}>
            <div className={styles.message}>{props.message}</div>
        </div>
    );
}
export default Message;