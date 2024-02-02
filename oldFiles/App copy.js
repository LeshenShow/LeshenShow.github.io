// import logo from './logo.svg';
import "./App.css";
import Header from "../src/components/Header/Header";
import Profile from "../src/components/Profile/Profile";
import DialogsContainer from "../src/components/Dialogs/DialogsContainer";
import { Routes, Route } from "react-router-dom";
import News from "../src/components/News/News";
import Music from "../src/components/Music/Music";
import Settings from "../src/components/Settings/Settings";
import Friends from "../src/components/Friends/Friends";
import NavbarContainer from "../src/components/Navbar/NavbarContainer";
import UsersContainer from "../src/components/Users/UsersContainer";

const App = (props) => {
  // debugger;
  // console.log("App", props);
  return (
    <div className="app-wrapper">
      {/* <div className='App'> */}
      <Header />
      <NavbarContainer />
      {/* <Navbar navbarPage={props.navbarPage} /> */}
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/Dialogs/*"
            element={
              <DialogsContainer
              // dialogsPage={props.state.dialogsReducer}
              // dispatch={props.dispatch}
              // store={props}
              />
            }
          />
          <Route
            path="/Profile/*"
            // element={<Profile postData={props.state.profilePage.postData} />}
            element={
              <Profile
              // store={props.store}
              // profilePage={props.state.profileReducer}
              // dispatch={props.dispatch}
              />
            }
          />
          <Route path="/News/*" element={<News />} />
          <Route path="/Music/*" element={<Music />} />
          <Route path="/Settings/*" element={<Settings />} />
          <Route path="/Friends/*" element={<Friends />} />
          <Route path="/Users/*" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
