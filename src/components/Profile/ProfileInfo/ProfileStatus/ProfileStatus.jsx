import React, { useState, useEffect } from "react";
import style from "../ProfileInfo.module.css";

// let arr = [true, () => {}];
// let [a, setA] = arr;

const ProfileStatus = (props) => {
  // let stateWithSetState = useState(false); // [false, function]
  // let editMode = stateWithSetState[0];
  // let setEditMode = stateWithSetState[1];
  const [editMode, setEditMode] = useState(false); // [false, function]
  const [status, setStatus] = useState(props.status);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (element) => {
    setStatus(element.currentTarget.value);
  };

  return (
    <div>
      {/* если не эдит мод, то */}
      {!editMode && (
        <div>
          <b>Status: </b>
          <span className={style.status} onDoubleClick={activateEditMode}>
            {props.status || "---------"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            className={style.status}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
            autoFocus={true}
          ></input>
        </div>
      )}
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
};

export default ProfileStatus;
