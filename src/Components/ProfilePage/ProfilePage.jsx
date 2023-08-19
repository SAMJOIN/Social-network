import MyPostsContainer from './MyPostsContainer';
import ProfileInfo from './ProfileInfo';

function ProfilePage(props) {
    debugger;
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
}
export default ProfilePage;