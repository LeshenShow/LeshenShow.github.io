import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return { postData: state.profilePage.postData };
};
let mapDispatchToProps = (dispatch = null) => {
  return {};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
