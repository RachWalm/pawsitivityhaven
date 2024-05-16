import React from "react";
import CallToAction from "../../components/CallToAction";
import { Container } from "react-bootstrap";
import AppStyles from "../../App.module.css"
import SearchPicture from "../../components/SearchPicture";


const Home = () => {
  return (
    <>
      <Container className={AppStyles.container}>
        <CallToAction />
      </Container>
      <Container className={AppStyles.container}>
        <SearchPicture />
      </Container>
    </>
  )
};

export default Home;