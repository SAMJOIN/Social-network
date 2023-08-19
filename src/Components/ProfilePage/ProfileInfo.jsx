import styles from './../ProfilePage/ProfilePage.module.css'
import Loader from '../Loader/Loader';
import noPhoto from '../../assets/images/user.png'

function ProfileInfo(props) {

    if (!props.profile) {
        return <Loader />
    }
    else {
        return (
            <div className={styles.profileBar}>
                <img className={styles.profileImg} src={props.profile.photos.large ? props.profile.photos.large : noPhoto} />
                <div className={styles.profileText}>
                    <p>{props.profile.fullName}</p>
                    <p>{'Status: ' + `${props.profile.aboutMe? props.profile.aboutMe: '-'}`}</p>
                    <p>{'Looking a job?: ' + `${props.profile.lookingForAJob ? 'Yes': 'No'}` }</p>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;