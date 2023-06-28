import styles from './../ProfilePage/ProfilePage.module.css'
function ProfileInfo(props) {
    return (
        <div className={styles.profileBar}>
            <img className={styles.profileImg} src={props.img} />
            <div className={styles.profileText}>
                <p>{props.name}</p>
                <p>{'Age: ' +props.age}</p>
                <p>{'Country: ' +props.country}</p>
            </div>
        </div>
    );
}
export default ProfileInfo;