import { createSelectorHook } from "react-redux";

// PRIMITIVE SELECTORS
export const getUsers = (state) => state.usersPage.users;
// код ниже будет создавать новый массив и будет постоянно срабатывать перерисовка в mapstatetoprops
//export const getUsers = (state) => state.usersPage.users.filter(u=>true)
export const getPageSize = (state) => state.usersPage.pageSize;
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getFollowingInProgress = (state) =>
  state.usersPage.followingInProgress;
//
// надо разобраться как работает через хуки
// const getUsersSelector = (state) => state.usersPage.users;
// export const getUsers = createSelectorHook((getUsersSelector, users) => {
//   users.filter((users) => true);
// });
