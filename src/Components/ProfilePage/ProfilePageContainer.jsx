import React from 'react';
import ProfilePage from './ProfilePage';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile } from '../../Rdeux/profile-reducer';
import { useParams } from 'react-router-dom'

export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfilePageContainer extends React.Component {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            debugger;
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return <ProfilePage {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}
let mapDispatchToProps = {
    setUserProfile
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePageContainer));