import MyPostsContainer from './MyPostsContainer';
import ProfileInfo from './ProfileInfo';

function ProfilePage(props) {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer /> 
        </div>
    );
}
export default ProfilePage;