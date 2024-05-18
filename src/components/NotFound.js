import React from 'react';
import NotFound from '../assets/notfound.jpg';
import Container from "react-bootstrap/Container";
import Asset from './Asset';
import appStyles from "../App.module.css";
import styles from "../styles/NotFound.module.css"

const Notfound = () => {
  return (
    <Container className={`${appStyles.container} ${styles.NotFound}`}>
      <Asset src= { NotFound } message="Sorry, the page you're looking for doesn't exist" />
    </Container>
  )
}

export default Notfound