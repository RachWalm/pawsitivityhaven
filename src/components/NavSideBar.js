import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "../styles/NavSideBar.module.css";
import { NavLink } from "react-router-dom";
import { axiosReq } from "../api/axiosDefault"
import { useCurrentUser } from "../contexts/CurrentUserContext";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavSideBar = () => {
    const currentUser = useCurrentUser();
    const id = currentUser?.pk
    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const [superData, setSuperData] = useState({
        is_superuser: "",
      });
      const { is_superuser } = superData;

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/user_profile/${currentUser?.pk}/`);
            const { is_superuser } = data;
            setSuperData({ is_superuser });
          } catch (err) {
            console.log(err);
          }
        };
        setTimeout(console.log("waiting"), 3000);
        handleMount();
      }, [currentUser]);

    const loggedInIcons = 
      <>
        <NavLink to={`/user-profile/${id}`}>
            <i className="fa-solid fa-person"></i>
            User Profile
        </NavLink>
        <NavLink exact to="/requests-adopt/">
            <i className="fa-solid fa-dog"></i>
            Adoption requests
        </NavLink>
      </>

    const superUserIcons = 
    <>
      <NavLink exact to="/dog-profile/create">
          <i className="fa-solid fa-dog"></i>
          Dog Profile create
      </NavLink>
    </>

  return (
    <Navbar
        expanded={expanded}
        className={styles.NavSideBar}
        expand="xs" fixed="left"
    >
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
                {currentUser && loggedInIcons}
                {is_superuser && superUserIcons}
                <NavLink to="/feed">
                    <i className="fa-solid fa-dog"></i>
                    Feed
                </NavLink>
            </Nav>
            </Navbar.Collapse>
    </Navbar>
  );
};

export default NavSideBar;