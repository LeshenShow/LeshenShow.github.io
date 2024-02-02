import React from "react";
import style from "./ItemFriend.module.css";
const ItemFriend = (props) => {
  return (
    <div className={style.item}>
        <img alt="error" src={props.photo} className={style.photo}></img>
        <span>{props.name}</span>
    </div>
  );
};

export default ItemFriend;
