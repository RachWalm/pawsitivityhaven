import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios"
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";


const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
          await axios.post("dj-rest-auth/logout/");
          setCurrentUser(null);
        } catch (err) {
          console.log(err);
        }
      };

    const loggedInIcons = <>
        <NavLink
            exact to="/"
            onClick= {handleSignOut}>
                <i className="fas fa-sign-out-alt"></i>
                Sign out
        </NavLink>
        <p>you are logged in as : {currentUser?.username}</p>
        </>

    const loggedOutIcons = <><NavLink
            exact to="/signin">
            <i className="fa-solid fa-right-to-bracket"></i>
            Sign in
        </NavLink>
        <NavLink exact to="/signup">
            <i class="fa-solid fa-user-plus"></i>
            Sign up
        </NavLink>
        </>
        
  return (
    <Navbar
        expanded={expanded}
        className={styles.NavBar}
        expand="md" fixed="top"
    >
        <Container>
            <NavLink to="/">
                <Navbar.Brand>
                    <img src={logo} height="50" alt="logo"/>
                </Navbar.Brand>
            </NavLink>
            <h1>Pawsitive Haven</h1>
            <Navbar.Toggle
                ref={ref}
                onClick={() => setExpanded(!expanded)}
                aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-right">
                <NavLink exact to="/">
                    <i className="fa-solid fa-house-chimney"></i>
                    Home
                </NavLink>
                {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavBar;