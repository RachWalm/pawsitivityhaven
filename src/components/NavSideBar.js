import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavSideBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

import appStyles from "../App.module.css"


const NavSideBar = () => {
    const currentUser = useCurrentUser();
    const id = currentUser?.pk
    const { expanded, setExpanded, ref } = useClickOutsideToggle();

  return (
    <Navbar
        expanded={expanded}
        className={styles.NavSideBar}
        expand="md" fixed="left"
    >
        <Container className= { appStyles.container }>
            <Navbar.Toggle
                ref={ref}
                onClick={() => setExpanded(!expanded)}
                aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-right">
            <div classname={styles.column}>
                <NavLink exact to="/">
                    <i className="fa-solid fa-house-chimney"></i>
                    Home
                </NavLink>
                <NavLink exact to="/dog-profile/create">
                    <i className="fa-solid fa-dog"></i>
                    Dog Profile create
                </NavLink>
                {currentUser?.username}
                <NavLink to={`/user-profile/${id}`}>
                    <i className="fa-solid fa-dog"></i>
                    User Profile
                </NavLink>
                <NavLink to="/feed">
                    <i className="fa-solid fa-dog"></i>
                    Feed
                </NavLink>
            </div>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavSideBar;