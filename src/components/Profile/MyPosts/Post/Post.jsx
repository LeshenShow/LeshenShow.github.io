import React from "react";
import style from "./Post.module.css";
import { postsLikeImage, profileAvatarEmpty } from "../../../../assets/photos";
const Post = (props) => {
  // debugger;
  // console.log(props.message)
  return (
    <div className={style.item}>
      <div className={style.photo}>
        <img alt="" src={profileAvatarEmpty}></img>
      </div>
      <div className={style.message}>
        <div>{props.message}</div>
        <div className={style.likes}>
          <button className={style.buttonLike}>
            <img alt="" src={postsLikeImage}></img>
            <span>{props.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
