import React from 'react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header(props) {
    return(
    <header className={styles.header}>
        <img height={200} src='./../react.png'/>
        <div className={styles.auth_block}>
            {props.isAuth ? props.login : <NavLink to={'/login'} >Login</NavLink> }
        </div>
    </header>);
}

export default Header;