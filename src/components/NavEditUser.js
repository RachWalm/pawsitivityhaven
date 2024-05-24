import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import appStyles from "../App.module.css"


const NavEditUser = () => {
    const currentUser = useCurrentUser();
    const id = currentUser?.pk
    const { expanded, setExpanded, ref } = useClickOutsideToggle();

  return (
    <Navbar
        expanded={expanded}
        expand="lg"
    >
        <Container className={appStyles.container}>
            <Navbar.Toggle
                ref={ref}
                onClick={() => setExpanded(!expanded)}
                aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-center">
            <NavLink to={`/user-profile/edit/username/${id}`}>
                    <i className="fa-solid fa-house-chimney"></i>
                    Edit user name
                </NavLink>
                <NavLink to={`/user-profile/edit/password/${id}`}>
                    <i className="fa-solid fa-dog"></i>
                    Edit password
                </NavLink>
                <NavLink to={`/user-profile/edit/${id}`}>
                    <i className="fa-solid fa-dog"></i>
                    Edit User Profile
                </NavLink>
                {/* {currentUser ? loggedInIcons : loggedOutIcons} */}
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavEditUser;