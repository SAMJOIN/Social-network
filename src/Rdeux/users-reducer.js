const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'

// let initState = {
//     users: [
//         { id: '1', followed: true, fullName: 'Nikita', status: 'Everything allright', location: { city: 'Magnitogorsk', country: 'Russia' }, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTre6ATP5zDhQoi6FfQGewIGb0cEhfxmtr6Ug&usqp=CAU' },
//         { id: '2', followed: false, fullName: 'Vasya', status: 'So sad', location: { city: 'Moscow', country: 'Russia' }, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vmPXI7A7LwZc1H2KmxM-LyRpnocS6o6XnWxZgDe-cUCW29_OVJMPP5c11ZQZyrX0iWE&usqp=CAU' },
//         { id: '3', followed: true, fullName: 'Aleksandr', status: '-_-', location: { city: 'Saint Petersburg', country: 'Russia' }, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfaxy8H42HWVq0AfuMDUiStXnkXWUjOlK_3w&usqp=CAU' },
//     ]
// }

let initState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0, // Ручной ввод, т.к. на сервере слишком много пользователей
    pageSize: 10,
    isFetching: false 
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return { ...user, followed: true }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return { ...user, followed: false }
                    return user
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOOGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const setTotalCount = (count) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount: count
    }
}
export const setFetching = (isFetching) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching
    }
}


export default usersReducer;