import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
function Dialog(props) {
    return (
        <div className={styles.dialog}>
            <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}
export default Dialog;