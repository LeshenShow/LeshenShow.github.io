import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    console.log("componentDidMount Props", this.props);
    this.props.getUserProfile(userId);
    // console.log("componentDidMount Response", response);// console.log("data", data);
  }
  render() {
    if (!this.props.isAuth) {
      return <Navigate to={"/login"} />;
    }
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});
let mapDispatchToProps = { getUserProfile };

let withUrlDataContainerCompoment = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withUrlDataContainerCompoment);
// export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
