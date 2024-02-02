import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
  // console.log('Profile', props);
  // debugger
  return (
    <div className="">
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer
      // state_test={props.store}
      // posts={props.profilePage}
      // dispatch={props.dispatch} 
      // newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
