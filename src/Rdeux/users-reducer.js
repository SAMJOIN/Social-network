const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

// let initState = {
//     users: [
//         { id: '1', followed: true, fullName: 'Nikita', status: 'Everything allright', location: { city: 'Magnitogorsk', country: 'Russia' }, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTre6ATP5zDhQoi6FfQGewIGb0cEhfxmtr6Ug&usqp=CAU' },
//         { id: '2', followed: false, fullName: 'Vasya', status: 'So sad', location: { city: 'Moscow', country: 'Russia' }, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vmPXI7A7LwZc1H2KmxM-LyRpnocS6o6XnWxZgDe-cUCW29_OVJMPP5c11ZQZyrX0iWE&usqp=CAU' },
//         { id: '3', followed: true, fullName: 'Aleksandr', status: '-_-', location: { city: 'Saint Petersburg', country: 'Russia' }, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfaxy8H42HWVq0AfuMDUiStXnkXWUjOlK_3w&usqp=CAU' },
//     ]
// }

let initState = {
    users: []
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const setUsersAC = (users) => {
    debugger;
    return {
        type: SET_USERS,
        users: users
    }
}


export default usersReducer;