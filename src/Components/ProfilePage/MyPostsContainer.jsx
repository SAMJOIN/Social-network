import MyPosts from './MyPosts';
import { addPostActionCreator} from '../../Rdeux/profile-reducer';
import {connect} from 'react-redux'
import { getNewPostText, getPosts } from '../../Rdeux/my-post-selectors';

const mapStateToProps = (state) => { // делаем объект с пропсами для презентационной компоненты MyPosts
    return {
        state: state,
        posts: getPosts(state),
        newPostText: getNewPostText(state)
    }
}

const mapDispatchToProps = (dispatch) => { // делаем объект с колбеками для презентационной компоненты MyPosts
    return {
        addNewPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;