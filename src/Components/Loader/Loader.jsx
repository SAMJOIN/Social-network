import styles from './loader.module.css'

let Loader = () => {
    return (
        <div className={styles.ui_abstergo}>
            <div className={styles.abstergo_loader}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.ui_text}>
                Synchronization
                <div className={styles.ui_dot}></div>
                <div className={styles.ui_dot}></div>
                <div className={styles.ui_dot}></div>
            </div>
        </div>
    )
}

export default Loader;