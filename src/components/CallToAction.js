import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/CallToAction.module.css";
import dogsbanner from "../assets/dogs-banner.jpg";

const CallToAction = () => {
    const page = useLocation();
    const currentpage = page.pathname;
    const home = <h3>Click on {
      currentpage === "/" ? (' a Dog Below ') : (
      <Link to="/">Here for Dogs </Link> )
    } For Information / Request Adoption (account - top right)</h3>
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
    <h3>Explore Their World, Change Their Lives:{ home } { feed }
    </h3>
    <img className={styles.banner}
      src={dogsbanner}
    />
    </>
  )
};

export default CallToAction;