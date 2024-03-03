import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../Rdeux/auth-reducer';

const HeaderContainer = (props) => {
    return (
        <Header {...props} />
    );
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.email,
})

let mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);