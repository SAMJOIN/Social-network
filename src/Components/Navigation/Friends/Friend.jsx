import styles from './Friends.module.css'
function Friend(props) {
    return (
        <div className={styles.friend}>
            <img className={styles.img} src={props.img} />
            <p className={styles.label}>{props.name}</p>
        </div>
    );
}

export default Friend;