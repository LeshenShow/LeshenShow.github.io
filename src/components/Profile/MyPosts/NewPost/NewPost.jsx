import React from "react";
import style from "./NewPost.module.css";

const NewPost = (props) => {
  // let newPostElement = React.createRef();
  let addPost = () => {
    // const action = { type: "ADD-POST" }; props.dispatch(action);
    props.addPost();
  };
  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.dispatch(updateNewPostTextActionCreator(text));
  // };
  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text); // стараемся делать без рефов, если это возможно
  };
  return (
    <div className={style.posts}>
      {/* <h3 contentEditable="true">New post</h3> */}
      <h3>New post</h3>
      <div className={style.textarea}>
        <textarea
          placeholder="Write a new post..."
          // ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange}
        />
      </div>
      <div className={style.button}>
        <button className={style.buttonClick} onClick={addPost}>
          Add post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
