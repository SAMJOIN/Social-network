import styles from './../ProfilePage/ProfilePage.module.css'
import Loader from '../Loader/Loader';
import noPhoto from '../../assets/images/user.png'
import ProfileStatus from './ProfileStatus';

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
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                    <p>{'Looking a job?: ' + `${props.profile.lookingForAJob ? 'Yes': 'No'}` }</p>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;