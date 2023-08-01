import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Rdeux/profile-reducer';
import {connect} from 'react-redux'

const mapStateToProps = (state) => { // делаем объект с пропсами для презентационной компоненты MyPosts
    return {
        state: state,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => { // делаем объект с колбеками для презентационной компоненты MyPosts
    return {
        addNewPost: () => {
            dispatch(addPostActionCreator());
        },
        onChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;