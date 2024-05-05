import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavEditUser.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios"
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";


const NavEditUser = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const id = 1
    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
          await axios.post("dj-rest-auth/logout/");
          setCurrentUser(null);
        } catch (err) {
          console.log(err);
        }
      };

    const addPostIcon = (<NavLink
        exact to="/posts/create">
        <i className="far fa-plus-square"></i>
        Add post
    </NavLink>)
    const loggedInIcons = <>
        <NavLink
            exact to="/"
            onClick= {handleSignOut}>
                <i className="fas fa-sign-out-alt"></i>
                Sign out
        </NavLink>
        {currentUser?.username}
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
        className={styles.NavEditUser}
        expand="md" fixed="top"
    >
        <Container>
            {currentUser && addPostIcon}
            <Navbar.Toggle
                ref={ref}
                onClick={() => setExpanded(!expanded)}
                aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-right">
            <NavLink to={`/user-profile/edit/username/${id}`}>
                    <i className="fa-solid fa-house-chimney"></i>
                    Edit user name
                </NavLink>
                <NavLink to={`/user-profile/edit/password/${id}`}>
                    <i className="fa-solid fa-dog"></i>
                    Edit password
                </NavLink>
                {currentUser?.username}
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