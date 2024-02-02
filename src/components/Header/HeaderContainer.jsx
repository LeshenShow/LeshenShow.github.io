import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/authReducer";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    usersAPI.getMe().then((data) => {
      console.log("Header response", data); // чекаем что приходит проверять можно еще через store.getState() в консоли
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
const mapDispatchToProps = { setAuthUserData };
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
