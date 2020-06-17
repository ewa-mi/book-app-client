import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./index.css";

export default function Navigation() {
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
            <NavbarItem
              path="/collectionslist/:id"
              linkText="Your collections"
            />
            <NavbarItem path="/login" linkText="Login" />
          </Nav>
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  );
}
