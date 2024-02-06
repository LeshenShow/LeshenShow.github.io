import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
const ProfileInfo = (props) => {
  console.log("ProfileInfo", props);
  if (!props.profile) {
    return <Preloader />;
  }

  let photoSrc =
    props.profile.photos.small === null
      ? "https://www.svgrepo.com/show/416527/animal-bird-cartoon.svg"
      : props.profile.photos.small;

  return (
    <div>
      <div className={style.descriptionBlock}>
        <div className={style.description}>{props.profile.fullName}</div>
        <img className={style.avatar} src={photoSrc} alt="error" />
      </div>
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
