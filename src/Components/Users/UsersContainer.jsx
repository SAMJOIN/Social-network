
import { connect } from 'react-redux'
import Users from "./Users"
import { setCurrentPage, setTotalCount, setFetching, follow, setUsers, unfollow } from "../../Rdeux/users-reducer"
import React from "react"
import Loader from "../Loader/Loader"
import { userAPI } from '../../api/api'

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setFetching(true);
            userAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(response => {
                    debugger;
                    this.props.setFetching(false);
                    this.props.setUsers(response.items); // Функция для получения и установлеения пользователей в state
                    this.props.setTotalCount(response.totalCount); // - Функция, которая получает с сервера реальное количество пользователей
                });
        }
    }

    onPageChange = (p) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(p);
        userAPI.getUsers(p, this.props.pageSize)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Loader /> :
                <Users
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow} />
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
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setFetching
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;