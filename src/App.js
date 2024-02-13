// import logo from './logo.svg';
import React from "react";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

import { connect } from "react-redux";
import { compose } from "redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    console.log(this.props.initialized);
    if (!this.props.initialized) {
      return <Preloader />;
    }
    console.log(this.props.initialized);
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/login/*" element={<LoginContainer />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />

            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/friends/*" element={<Friends />} />
            <Route path="/users/*" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
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
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
const mapDispatchToProps = { initializeApp };
const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
// export default App;
// const App = (props) => {
//   return (
//     <div className="app-wrapper">
//       <HeaderContainer />
//       <NavbarContainer />
//       <div className="app-wrapper-content">
//         <Routes>
//           <Route path="/dialogs/*" element={<DialogsContainer />} />
//           <Route path="/login/*" element={<LoginContainer />} />
//           <Route path="/profile/*" element={<ProfileContainer />} />
//           <Route path="/profile/:userId?" element={<ProfileContainer />} />

//           <Route path="/news/*" element={<News />} />
//           <Route path="/music/*" element={<Music />} />
//           <Route path="/settings/*" element={<Settings />} />
//           <Route path="/friends/*" element={<Friends />} />
//           <Route path="/users/*" element={<UsersContainer />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

let SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default SamuraiJSApp;
