import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  // console.log('Profile', props);
  // debugger

  return (
    <div className="">
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}
      />
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
