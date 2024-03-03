import React from 'react';
import styles from './../ProfilePage/ProfilePage.module.css'
import Post from './Post';
import { Field, reduxForm } from 'redux-form';

function MyPosts(props) {

    let posts = props.posts;

    function addPost(values) {  // Функция добавления поста 
        props.addNewPost(values.newPostBody);
    }

    let postsElements = posts.map((el) => (<Post message={el.message} like={el.likeCount} key={el.id} />))

    return (
        <div className={styles.myPosts}>
            <div className={styles.label}>My posts</div>
            <div className={styles.newPostArea}>
                <NewPostFormRedux onSubmit={addPost} />
            </div>
            <div className="posts">
                {postsElements}
            </div>
        </div>
    );
}

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={styles.textArea} component='textarea' name='newPostBody' placeholder='Enter message' />
            <button className={styles.btn} type='submit'>Add</button>
        </form>
    );
}

const NewPostFormRedux = reduxForm({ form: 'newPostForm' })(NewPostForm);

export default MyPosts;