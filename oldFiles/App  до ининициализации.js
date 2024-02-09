// import logo from './logo.svg';
import "./App.css";
import DialogsContainer from "../src/components/Dialogs/DialogsContainer";
import { Routes, Route } from "react-router-dom";
import News from "../src/components/News/News";
import Music from "../src/components/Music/Music";
import Settings from "../src/components/Settings/Settings";
import Friends from "../src/components/Friends/Friends";
import NavbarContainer from "../src/components/Navbar/NavbarContainer";
import UsersContainer from "../src/components/Users/UsersContainer";
import ProfileContainer from "../src/components/Profile/ProfileContainer";
import HeaderContainer from "../src/components/Header/HeaderContainer";
import LoginContainer from "../src/components/Login/LoginContainer";

const App = (props) => {
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
};

export default App;
