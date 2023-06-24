import styles from './../styles/ProfilePage.module.css'
import Post from './Post';
function ProfilePage() {
    return (
        <div className={styles.profileInfo}>
            <div className={styles.profileBar}>
                <div className={styles.profileImg}></div>
                <div className={styles.profileText}>
                    <p>Sam Carter</p>
                    <p>Age: 21</p>
                    <p>Country: Russia</p>
                </div>
            </div>
            <div className={styles.myPosts}>
                <div className={styles.label}>My posts</div>
                <button className={styles.btn}>New post</button>
                <div className="posts"> 
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
}
export default ProfilePage;