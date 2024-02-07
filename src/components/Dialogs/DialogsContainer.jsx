import React from "react";
import { addMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  console.log("DialogsContainer", state);
  return { dialogsPage: state.dialogsPage };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageBody) => {
      let action = addMessageActionCreator(newMessageBody);
      dispatch(action);
    },
  };
};

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   withAuthRedirect
// )(Dialogs);
// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);
// export default DialogsContainer;
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
