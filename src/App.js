// import logo from './logo.svg';
import React, { Suspense } from "react";
import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
import { Provider, connect } from "react-redux";
import { compose } from "redux";

import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "./components/common/Preloader/Preloader";
import { initializeApp } from "./redux/appReducer";
import store from "./redux/redux-store";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const Music = React.lazy(() => import("./components/Music/Music"));
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const LoginContainer = React.lazy(() =>
  import("./components/Login/LoginContainer")
);
const News = React.lazy(() => import("./components/News/News"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const Friends = React.lazy(() => import("./components/Friends/Friends"));

class App extends React.Component {
  catchAllUnhandleError = (reason, promiseRejectionEvent) => {};
  componentDidMount() {
    this.props.initializeApp();
    // чекаем ошибки на их наличие
    window.addEventListener("unhandlerejection", this.catchAllUnhandleError);
  }
  componentWillUnmount() {
    // если компонента умрет, нужно удалить мусор, т.к. объект виндов не является частью реакта
    window.removeEventListener("unhandlerejection", this.catchAllUnhandleError);
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Suspense //ленивая загрузка, можно обернуть отдельный компонент
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
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
              <Route path={"/" && "*"} element={<Navigate to="/profile" />} />
            </Routes>
          </Suspense>
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
