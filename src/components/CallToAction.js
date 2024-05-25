import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/CallToAction.module.css";
import dogsbanner from "../assets/dogs-banner.jpg";
import {
  useCurrentUser,
} from "../contexts/CurrentUserContext";

const CallToAction = () => {
    const page = useLocation();
    const currentpage = page.pathname;
    const currentUser = useCurrentUser();

    const home = <h3>Click on {
      currentpage === "/" ? (' a Dog Below ') : (
      <Link to="/">Here for Dogs </Link> )
    } For Information & Request Adoption {currentUser ? ("") : (
      <Link to="/signin">
          Adoption requires sign in
      </Link>)}</h3>
    const feed = <h3>or Follow Their Journey {
      currentpage === "/feed" ? (' Below.') : (
        <Link to="/feed">
            Feed
        </Link>)
      }
    </h3>

  return (
    <>
    <h2>Adopt a Forever Friend, One Paw at a Time. <hr></hr>Meet the Dogs Waiting at Our Center</h2>
    <h3>Explore Their World, Change Their Lives:
      <ul>
        <li>{ home }</li>
        <li>{ feed }</li>
      </ul>
    </h3>
    <img className={styles.banner}
      src={dogsbanner} alt="Row of dogs looking over log"
    />
    </>
  )
};

export default CallToAction;