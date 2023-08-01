import MyPostsContainer from './MyPostsContainer';
import ProfileInfo from './ProfileInfo';
function ProfilePage() {

    return (
        <div>
            <ProfileInfo name='Sam Carter' age='21' country='Russia' img='https://anime-fans.ru/wp-content/uploads/2021/05/Kreativnye-anime-avatarki-dlya-stima-v-luchshem-kachestve_01.jpg' />
            <MyPostsContainer />
        </div>
    );
}
export default ProfilePage;