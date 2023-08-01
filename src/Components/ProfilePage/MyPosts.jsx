import React from 'react';
import styles from './../ProfilePage/ProfilePage.module.css'
import Post from './Post';

function MyPosts(props) { 

    let posts = props.posts;

    let textArea = React.createRef();
    
    function addPost() {  // Функция добавления поста 
        props.addNewPost();
    }

    function onTextChange() { // Функция, которая прокидывает обновление textarea в state
        let text = textArea.current.value;
        props.onChange(text);
    }

    let postsElements = posts.map((el) => (<Post message={el.message} like={el.likeCount} />))

    return (
        <div className={styles.myPosts}>
            <div className={styles.label}>My posts</div>
            <div className={styles.newPostArea}>
                <textarea onChange={onTextChange} // При изменении будем отправлять данные в state
                    className={styles.textArea}
                    ref={textArea}
                    value={props.newPostText} /> {/* Делаем значение фиксированным, равным newPostText из state */}
                <button className={styles.btn} onClick={addPost}>Add post</button>
            </div>
            <div className="posts">
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;