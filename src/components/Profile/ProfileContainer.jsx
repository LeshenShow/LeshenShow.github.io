import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getStatus,
  getUserProfile,
  savePhoto,
  saveProfile,
  updateStatus,
} from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      //  плохая практика лучше делать это в рендере  а еще лучше чтобы стейт делал редирект
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId); // console.log("componentDidMount Response", response);// console.log("data", data);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile
        isOwner={!this.props.router.params.userId}
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
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
  authorizedUserId: state.auth.userId,
});
let mapDispatchToProps = {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
};

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
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
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
