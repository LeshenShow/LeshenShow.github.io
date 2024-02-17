import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import { profileAvatarEmpty } from "../../../assets/photos";
import { ProfileData, ProfileDataReduxForm } from "./ProfileData/ProfileData";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);
  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false); // лучше сделать без ожидания, а в бизнес воткнуть флаг
    });
  };

  if (!props.profile) {
    return <Preloader />;
  }
  const mainPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0]);
    }
  };
  return (
    <div>
      <div className={style.descriptionBlock}>
        <div className={style.description}>{props.profile.fullName}</div>
        <img
          className={style.avatar}
          src={props.profile.photos.small || profileAvatarEmpty}
          alt="error"
        />
        {props.isOwner && (
          <input type={"file"} onChange={mainPhotoSelected}></input>
        )}
      </div>
      {editMode ? (
        <ProfileDataReduxForm
          profile={props.profile}
          initialValues={props.profile}
          isOwner={props.isOwner}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          profile={props.profile}
          isOwner={props.isOwner}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
};

export default ProfileInfo;
// profile :
//  aboutMe: "я круто чувак 1001%"
//  contacts: {
//    facebook: 'facebook.com',
//    website: null,
//    vk: 'vk.com/dimych',
//    twitter: 'https://twitter.com/@sdf',
//    instagram: 'instagram.com/sds', …
//    }
// fullName: "samurai dimych"s
// lookingForAJob:true
// lookingForAJobDescription:"не ищу, а дурачусь"
// photos:{
//  small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
//  large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'
//  }
// userId: 2
