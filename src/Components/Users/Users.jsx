import styles from './Users.module.css'
import axios from 'axios'
import noPhoto from '../../assets/images/user.png'

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });
    }
    
    return (
        <div>
            {
                props.users.map(user =>
                    <div className={styles.userContainer}>
                        <div className={styles.btnAndImg}>
                            <img src={user.img != null ? user.img : noPhoto} className={styles.userImg} />
                            {user.followed ? <button className={styles.followBtn} onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                <button className={styles.followBtn} onClick={() => props.follow(user.id)}>Follow</button>}
                        </div>
                        <div className={styles.userInfo}>
                            <p>Name: {user.name}</p>
                            <p>Status: {user.status}</p>
                            {/* <p>Country: {user.location.country}</p>
                            <p>City: {user.location.city}</p> */}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;