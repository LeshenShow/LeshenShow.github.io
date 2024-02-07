import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { login, logout } from "../../redux/authReducer";

class LoginContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <Login {...this.props} />;
  }
}
const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });
const mapDispatchToProps = {
  login: login,
  logout: logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
