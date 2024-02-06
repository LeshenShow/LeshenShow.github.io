import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    console.log("componentDidMount Props", this.props);
    this.props.getUserProfile(userId); // console.log("componentDidMount Response", response);// console.log("data", data);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
});
let mapDispatchToProps = { getUserProfile, getStatus, updateStatus };

// let withUrlDataContainerComponent = withRouter(ProfileContainer);
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withUrlDataContainerComponent);

// сломалось? поставил на паузу проверку аутентификации
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);

// долгий вараиант
// compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   withUrlDataContainerComponent,
//   withAuthRedirect
// )(ProfileContainer);
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withUrlDataContainerComponent);
