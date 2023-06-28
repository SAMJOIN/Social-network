import styles from './../ProfilePage/ProfilePage.module.css'
import Post from './Post';
function MyPosts(props) { // В пропсах posts

    let posts = props.posts;

    let postsElements = posts.map( (el) => (<Post message={el.message} like={el.likeCount}/>))

    return (
        <div className={styles.myPosts}>
            <div className={styles.label}>My posts</div>
            <button className={styles.btn}>New post</button>
            <div className="posts">
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;