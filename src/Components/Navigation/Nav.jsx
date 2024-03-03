import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'
import FriendsContainer from './Friends/FriendsContainer';
function Nav(props) {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/Dialogs'>Dialogs</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/Profile/29844'}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/Users'>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/News'>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/Music'>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/Settings'>Settings</NavLink>
            </div>
            <div>
                <FriendsContainer />
            </div>
        </nav>
    );
}
export default Nav;