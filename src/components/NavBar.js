import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container>
            <NavLink to="/">
                <Navbar.Brand>
                    <img src={logo} height="50" alt="logo"/>
                </Navbar.Brand>
            </NavLink>
            <h1>Pawsitive Haven</h1>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-right">
                <NavLink exact to="/">
                    <i className="fa-solid fa-house-chimney"></i>
                    Home
                </NavLink>
                <NavLink exact to="/signin">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    Sign in
                </NavLink>
                <NavLink exact to="/signup">
                    <i class="fa-solid fa-user-plus"></i>
                    Sign up
                </NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavBar;