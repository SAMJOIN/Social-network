import React from 'react';
import styles from './Header.module.css'
import { NavLink, Navigate } from 'react-router-dom';


function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.auth_block}>
                {props.isAuth && <div>{props.login} <button onClick={props.logout}>Log out</button> </div>}
            </div>
        </header>);
}

export default Header;