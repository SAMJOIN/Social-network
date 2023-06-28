import Friend from './Friend';
import styles from './Friends.module.css'
function Friends (props) {

    let friendsList = props.state.map( friend => <Friend img={friend.img} name={friend.name}/>)

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