import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const FOLLOWING_PROGRESS = "FOLLOWING_PROGRESS";

let initState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0, // Ручной ввод, т.к. на сервере слишком много пользователей
  pageSize: 10,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) return { ...user, followed: true };
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) return { ...user, followed: false };
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
    case TOOGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    default:
      return state;
  }
};

export const toogleFollowingProgress = (isFetching, userId) => {
  return {
    type: FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};
export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId: userId,
  };
};
export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};
export const setTotalCount = (count) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount: count,
  };
};
export const setFetching = (isFetching) => {
  return {
    type: TOOGLE_IS_FETCHING,
    isFetching,
  };
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setFetching(true));
    userAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(setFetching(false));
      dispatch(setUsers(response.items)); // Функция для получения и установлеения пользователей в state
      dispatch(setTotalCount(response.totalCount)); // - Функция, которая получает с сервера реальное количество пользователей
    });
  };
};

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(toogleFollowingProgress(true, userId));
    userAPI.getFollow(userId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(follow(userId));
      }
      dispatch(toogleFollowingProgress(false, userId));
    });
  };
};

export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(toogleFollowingProgress(true, userId));
    userAPI.getUnfollow(userId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(unfollow(userId));
      }
      dispatch(toogleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
