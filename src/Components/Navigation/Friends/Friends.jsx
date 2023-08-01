import Friend from './Friend';
import styles from './Friends.module.css'
function Friends (props) {

    let friendsList = props.friendsList;

    return (
        <div className={styles.friendsBar}>
            Friends
        <div className=''>
            { friendsList }
        </div>
        </div>
    );
}
export default Friends;