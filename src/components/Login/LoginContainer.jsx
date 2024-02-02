import React from "react";
import { connect } from "react-redux";
import Login from "./Login";

class LoginContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <Login {...this.props} />;
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
