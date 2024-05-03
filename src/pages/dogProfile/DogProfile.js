import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
// import {
//   useProfileData,
//   useSetProfileData,
// } from "../../contexts/ProfileDataContext";

import appStyles from "../../App.module.css"

function DogProfile() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [dogData, setDogData] = useState(
    {
        id: 1,
        dog_name: null,
        created_at: "Thursday 02 May 2024 14:11:31",
        updated_at: "Thursday 02 May 2024 14:11:31",
        received_date: null,
        rehomed_date: null,
        returned_date: null,
        dog_age: 1,
        dog_breed: "greyhound",
        dog_gender: 0,
        dog_size: 0,
        dog_image: "https://res.cloudinary.com/dykxglqm8/image/upload/v1/media/../dog-image-na_zmmfot",
        at_rescue: true,
        status: 0,
        general: "af",
        home_cats: false,
        home_dogs: false,
        home_animals: false,
        home_children: false,
        favourite_id: null,
        fav_count: 0
        }
  );
//   const currentUser = useCurrentUser();

  const { id } = useParams();
//   const setProfileData = useSetProfileData();
//   const { pageProfile } = useProfileData();
//   const [dog] = dogData.results;
//   const is_owner = currentUser?.username === profile?.owner;


  useEffect(() => {
    const fetchData = async () => {
      console.log('start request')
      try {
        const [{ data: dogData }] = await Promise.all([
          axiosReq.get(`/dog_profile/${id}/`),
        ]);
        console.log('got request')
        setDogData((prevState) => ({
          ...prevState,
          dogData: { results: [dogData] }
        }));
        console.log('data in dogData')
        console.log(dogData)
        console.log(dogData.dog_name)
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log('reach')
    console.log(dogData)
    console.log(dogData?.dog_name)
  }, [id, setDogData]);

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={6}>
          <h3 className="m-2"> Dog name - {dogData?.dog_name} </h3>
          {/* <h4>pk - {currentUser?.pk}</h4>
          <h4>email - {currentUser?.email}</h4>
          <h4>first_name - {currentUser?.first_name}</h4>
          <h4>last_name - {currentUser?.last_name}</h4> */}
        </Col>
      </Row>
    </>
  );


  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container className={appStyles.container}>
              {mainProfile}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      </Col>
    </Row>
  );
}

export default DogProfile;