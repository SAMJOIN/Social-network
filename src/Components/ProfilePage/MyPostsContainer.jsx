import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Rdeux/profile-reducer';

function MyPostsContainer(props) { // В пропсах posts

    let state = props.store.getState();

    let posts = state.profilePage.posts;
    
    function addNewPost() {  // Функция добавления поста 
        props.store.dispatch(addPostActionCreator());
    }

    function onChange(text) { // Функция, которая прокидывает обновление textarea в state
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }


    return <MyPosts newPostText={state.newPostText} posts={posts} addPost={addNewPost} onTextChange={onChange}/>
}
export default MyPostsContainer;