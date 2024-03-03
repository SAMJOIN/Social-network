import styles from './Users.module.css'
import noPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pages = [];
    let visiblePages = [];
    let usersCount = Math.ceil(props.totalUsersCount / props.pageSize)

    if (props.currentPage - 4 < 3) {

        for (let i = 2; i < props.currentPage + 5; i++) {
            visiblePages.push(i);
        }
        visiblePages.push('...');
    }
    else if (props.currentPage + 4 > usersCount) {
        visiblePages.push('...');
        for (let i = props.currentPage - 4; i < usersCount; i++) {
            visiblePages.push(i);
        }
    }
    else if (props.currentPage - 4 > 2 || props.currentPage + 4 < usersCount) {
        visiblePages.push('...');
        for (let i = props.currentPage - 4; i < props.currentPage + 5; i++)
            visiblePages.push(i);
        visiblePages.push('...');
    }

    pages = [1, ...visiblePages, usersCount];

    return (
        <div>

            <div>
                {pages.map(p => {
                    if (p === props.currentPage) {
                        return <span className={props.currentPage === p ? styles.selectedPage : styles.pageNumber} >{'   ' + p + '   '}</span>
                    }
                    else if (p === '...') {
                        return <span>{'   ' + p + '   '}</span>
                    } else {
                        return <span className={props.currentPage === p ? styles.selectedPage : styles.pageNumber} onClick={() => { props.onPageChange(p) }}>{'   ' + p + '   '}</span>
                    }
                })}
            </div>

            {
                props.users.map(user =>
                    <div className={styles.userContainer}>
                        <div className={styles.btnAndImg}>
                            <NavLink to={'/Profile/' + user.id}>
                                <img src={user.photos.large != null ? user.photos.large : noPhoto} className={styles.userImg} />
                            </NavLink>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} className={styles.followBtn}
                                    onClick={() => { props.unfollowThunk(user.id) }}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === user.id)} className={styles.followBtn}
                                    onClick={() => { props.followThunk(user.id); }}>Follow</button>}
                        </div>
                        <div className={styles.userInfo}>
                            <p>Name: {user.name}</p>
                            <p>Status: {user.status}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;