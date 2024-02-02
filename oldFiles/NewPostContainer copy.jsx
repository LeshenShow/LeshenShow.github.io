import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../src/redux/profileReducer";
import NewPost from "../src/components/Profile/MyPosts/NewPost/NewPost";

const NewPostContainer = (props) => {
  let addPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
    // props.dispatch(addPostActionCreator());
  };
  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action); // стараемся делать без рефов, если это возможно
  };
  return (
    <NewPost
      updateNewPostText={onPostChange}
      addPost={addPost}
      newPostText={props.newPostText} 
    />
  );
};

export default NewPostContainer;
///////
// const NewPostContainer = (props) => {
// let addPost = () => {
//   let action = addPostActionCreator();
//   props.dispatch(action);
//   // props.dispatch(addPostActionCreator());
// };
// let onPostChange = (text) => {
//   let action = updateNewPostTextActionCreator(text);
//   props.dispatch(action); // стараемся делать без рефов, если это возможно
// };
// return (
//   <StoreContext.Consumer>
//     {(store) => {
//       let state = store.getState();
//       let addPost = () => {
//         let action = addPostActionCreator();
//         props.dispatch(action);
//         // props.dispatch(addPostActionCreator());
//       };
//       let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.dispatch(action); // стараемся делать без рефов, если это возможно
//       };
//       return (
//         <NewPost
//           updateNewPostText={onPostChange}
//           addPost={addPost}
//           newPostText={store.getState().profileReducer.newPostText}
//           // newPostText={props.newPostText}
//         />
//       );
//     }}
//   </StoreContext.Consumer>
// );
// };