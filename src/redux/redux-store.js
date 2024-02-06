import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { thunk as thunkMiddleware } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
let reducers = combineReducers({
  //profilePage: profileReducer, если без ключа, то названия меняются, но можно просто profileReducer
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbarPage: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
console.log("store", store);
export default store;
// testd
