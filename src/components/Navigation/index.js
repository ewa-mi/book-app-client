import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { selectUser } from "../../store/user/selectors";

import "./index.css";

export default function Navigation() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand as={NavLink} to="/">
        <Logo className="logo" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }} fill>
            <NavbarItem path="/" linkText="Homepage" />
            <NavbarItem path="/about" linkText="About" />
            <NavbarItem
              path={user?.id ? `/collectionslist/${user.id}` : "/signup"}
              linkText="Your collections"
            />
            {loginLogoutControls}
          </Nav>
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  );
}
