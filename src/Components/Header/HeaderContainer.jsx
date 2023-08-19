import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserAuthData } from '../../Rdeux/auth-reducer'
import axios from 'axios';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data; 
                    this.props.setUserAuthData(id, login, email);
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

let mapDispatchToProps = {
    setUserAuthData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);