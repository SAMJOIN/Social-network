import MyPosts from './MyPosts';
import MyPostsContainer from './MyPostsContainer';
import ProfileInfo from './ProfileInfo';
function ProfilePage(props) { // В пропсах posts

    return (
        <div>
            <ProfileInfo name='Sam Carter' age='21' country='Russia' img='https://anime-fans.ru/wp-content/uploads/2021/05/Kreativnye-anime-avatarki-dlya-stima-v-luchshem-kachestve_01.jpg' />
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}
export default ProfilePage;