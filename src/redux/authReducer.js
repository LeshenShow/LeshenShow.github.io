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
export default authReducer;
