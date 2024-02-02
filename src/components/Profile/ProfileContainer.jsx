import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";

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
    usersAPI.getUserProfile(userId)
      .then((data) => {
        this.props.setUserProfile(data);
        // console.log("componentDidMount Response", response);
        // console.log("data", data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
let mapDispatchToProps = { setUserProfile };

let withUrlDataContainerCompoment = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withUrlDataContainerCompoment);
// export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
