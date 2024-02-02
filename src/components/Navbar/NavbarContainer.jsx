import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  // console.log("NavbarContainer", state);
  return { navbarPage: state.navbarPage };
};
let mapDispatchToProps = (dispatch = null) => {
  return {};
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
