import { authAPI } from "../api/api";
const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
let initialState = {
  isAuth: false,
  userId: null,
  email: null,
  login: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      break;
  }
  return state;
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login },
});

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.getMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};

export default authReducer;
