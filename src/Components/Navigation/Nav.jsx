import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'
import Friends from './Friends/Friends';
function Nav(props) {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/Dialogs'>Dialogs</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/Profile'>Profile</NavLink>
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
                <Friends state={props.state}/>
            </div>
        </nav>
    );
}
export default Nav;