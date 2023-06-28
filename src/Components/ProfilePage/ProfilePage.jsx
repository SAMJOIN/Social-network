import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';
function ProfilePage(props) { // В пропсах posts

    return (
        <div>
            <ProfileInfo name='Sam Carter' age='21' country='Russia' img='https://anime-fans.ru/wp-content/uploads/2021/05/Kreativnye-anime-avatarki-dlya-stima-v-luchshem-kachestve_01.jpg'/>
            <MyPosts posts={props.posts} />
        </div>
    );
}
export default ProfilePage;