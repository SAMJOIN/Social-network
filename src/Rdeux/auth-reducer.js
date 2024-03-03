import { userAPI } from "../api/api";
const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initState = {
  email: null,
  password: null,
  rememberMe: null,
  isAuth: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      debugger
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
};

export const setUserAuthData = (email, password,rememberMe, isAuth) => {
  return {
    type: SET_AUTH_USER_DATA,
    data: { email, password, rememberMe, isAuth },
  };
};

export const getUserAuthData = () => (dispatch) => {
  return userAPI.getAuthData().then((response) => {
    if (response.resultCode === 0) {
      let { email, password, rememberMe } = response.data;
      debugger
      dispatch(setUserAuthData(email, password, rememberMe, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  
  userAPI.login(email, password, rememberMe)
    .then(response =>{
      if (response.resultCode === 0) {
        dispatch(getUserAuthData())
      }
      else {
        alert('Неправильный логин или пароль')
      }
    })
}

export const logout = () => (dispatch) => {
  userAPI.logout()
    .then(response =>{
      if (response.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false));
      }
    })
}

export default authReducer;
