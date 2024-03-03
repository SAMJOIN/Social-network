
import { connect } from 'react-redux'
import Users from "./Users"
import { setCurrentPage, follow, unfollow} from "../../Rdeux/users-reducer"
import React from "react"
import Loader from "../Loader/Loader"
import { getUsers, followThunk, unfollowThunk } from '../../Rdeux/users-reducer'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChange = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Loader /> :
                <Users
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followThunk={this.props.followThunk}
                    unfollowThunk={this.props.unfollowThunk} 
                    followingInProgress={this.props.followingInProgress}/>
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const mapDispatchToProps = {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
    followThunk,
    unfollowThunk
}


const UsersContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersAPIComponent)

export default UsersContainer;