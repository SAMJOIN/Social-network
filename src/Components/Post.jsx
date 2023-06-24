import styles from './../styles/ProfilePage.module.css'
function Post() {
    return (
        <div className={styles.item}>
            <div className={styles.header}>
                <img className={styles.postImg} src='https://anime-fans.ru/wp-content/uploads/2021/05/Kreativnye-anime-avatarki-dlya-stima-v-luchshem-kachestve_01.jpg'></img>
                <p>SAMJOIN</p>
            </div>
            <div className="content">

            </div>

        </div>
    );
}

export default Post;