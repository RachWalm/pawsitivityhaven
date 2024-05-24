import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "../styles/CallToAction.module.css";
import dogsbanner from "../assets/dogs-banner.jpg";


const FormTitle = () => { 
  const page = useLocation();
  const currentpage = page.pathname;
  const { id } = useParams();
  const formtitle = (currentpage) => {
    switch (currentpage) {
      case '/dog-profile/create':
        return <h2>Please Create a Profile of the Dog </h2>; 
      case '/post/create':
        return 'Please Create a post';
      case '/signin':
        return 'Please sign in'
      case '/signup':
        return 'Please sign up'
      case `/dog-profile/edit/${ id }`:
        return 'Edit the dog profile'
      case '/requests-adopt':
        return 'Here are the adoption requests'  
      default:
        return `Please enjoy our site`; // Default case for unexpected input
    }
  }
    

  return (
    <>
    <h2>{formtitle(currentpage)}</h2>
    <img className={styles.banner}
      src={dogsbanner} alt="Row of dogs looking over log"
    />
    </>
  )
};

export default FormTitle;