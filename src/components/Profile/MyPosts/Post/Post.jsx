import React from "react";
import style from "./Post.module.css";
const Post = (props) => {
  // debugger;
  // console.log(props.message)
  return (
    <div className={style.item}>
      <div className={style.photo}>
        <img
          alt=""
          src="https://www.svgrepo.com/show/416527/animal-bird-cartoon.svg"
        ></img>
      </div>
      <div className={style.message}>
        <div>{props.message}</div>
        <div className={style.likes}>
          <button className={style.buttonLike}>
            <img
              alt=""
              src="https://www.svgrepo.com/show/474892/like-placeholder.svg"
            ></img>
            <span>{props.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
