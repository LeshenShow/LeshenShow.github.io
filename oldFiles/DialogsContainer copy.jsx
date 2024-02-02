import React from "react";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../src/redux/dialogsReducer";
import Dialogs from "../src/components/Dialogs/Dialogs";

const DialogsContainer = (props) => {
  // console.log("DialogsContainer");
  // console.log(props);
  // debugger;

  // let state = props.store.getState().dialogsReducer;
  let state = props.store.state.dialogsReducer;
  // console.log("state");
  // console.log(state);
  // debugger;
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };
  let onMessageChange = (text) => {
    let action = updateMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      updateMessageText={onMessageChange}
      addMessage={addMessage}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
