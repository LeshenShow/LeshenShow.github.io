import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
// STATE
let initialState = {
  initialized: false,
  // globalError: null,
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      break;
  }
  return state;
};
// ACTION CREATOR
export const setInitializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});
// THUNK
export const initializeApp = () => {
  return (dispatch) => {
    // мы сделали возврат диспатча в authReducer, что не рекомендуется делать, получили промис т.к. then возвращает тоже промис
    let promise = dispatch(getAuthUserData());
    // let promise2 = dispatch(some());
    // let promise3 = dispatch(some());
    // когда все промисы получает ответ, тогда диспатч
    Promise.all([promise]).then(() => {
      dispatch(setInitializedSuccess());
    });
  };
};

export default appReducer;
