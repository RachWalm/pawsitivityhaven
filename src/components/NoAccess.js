import React from 'react';
import NoAccess from '../assets/noaccess.jpg';
import Container from "react-bootstrap/Container";
import Asset from './Asset';
import appStyles from "../App.module.css";
import styles from "../styles/NotFound.module.css"

const NoAccess = () => {
  return (
    <Container className={`${appStyles.container} ${styles.NotFound}`}>
      <Asset src= { NoAccess } message="Sorry, this page is restricted. Please sign in or sign up to view if you should have access." />
    </Container>
  )
}

export default NoAccess