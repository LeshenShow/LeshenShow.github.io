import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData, logout } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.props.getAuthUserData();
    // authAPI.getMe().then((data) => {
    //   console.log("Header response", data); // чекаем что приходит проверять можно еще через store.getState() в консоли
    //   if (data.resultCode === 0) {
    //     let { id, email, login } = data.data;
    //     this.props.setAuthUserData(id, email, login);
    //   }
    // });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
const mapDispatchToProps = { getAuthUserData, logout };
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
