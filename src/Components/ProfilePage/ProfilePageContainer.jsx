import React from 'react';
import ProfilePage from './ProfilePage';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../Rdeux/profile-reducer';
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose  } from 'redux';


export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfilePageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <ProfilePage {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
let mapDispatchToProps = {
    getUserProfile,
    getStatus,
    updateStatus
}

let ProfilePageComponent = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfilePageContainer)

export default ProfilePageComponent;