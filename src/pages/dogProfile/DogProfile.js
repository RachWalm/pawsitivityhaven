import React, { useEffect, useState, useRef } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  useProfileData,
} from "../../contexts/ProfileDataContext";
import buttnStyle from "../../styles/Buttn.module.css"
import appStyles from "../../App.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function DogProfile() {
  const currentUser = useCurrentUser();
  const [dogData, setDogData] = useState({
        dog_name: "",
        received_date: "",
        rehomed_date: "",
        returned_date: "",
        dog_age: "",
        dog_breed: "",
        dog_gender: "",
        dog_size: "",
        dog_image: "",
        at_rescue: "",
        status: "",
        general: "",
        home_cats: "",
        home_dogs: "",
        home_animals: "",
        home_children: "",
  });
  const { dog_name, received_date, rehomed_date, returned_date, dog_age, dog_breed, dog_gender, dog_size, dog_image, at_rescue, status, general, home_cats, home_dogs, home_animals, home_children, } = dogData;

  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();


  const [userStatus, setUserStatus] = useState ({
    first_name: "",
    last_name: "",
    is_staff: "",
    is_superuser: "",
});

  const currentpk = currentUser?.pk;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data: dog } = await 
          axiosReq.get(`/dog_profile/${id}/`)
        const { dog_name, received_date, rehomed_date, returned_date, dog_age, dog_breed, dog_gender, dog_size, dog_image, at_rescue, status, general,
            home_cats, home_dogs, home_animals, home_children, } = dog;
          setDogData({ dog_name, received_date, rehomed_date, returned_date, dog_age, dog_breed, dog_gender,
            dog_size, dog_image, at_rescue, status, general, home_cats, home_dogs, home_animals,
            home_children,});
      } catch (err) {
        console.log(err);
      }
    };
    const handleUser = async () => {
      try {
        const { data: userstatus } = await
        axiosReq.get(`/user_profile/${currentpk}`)
        setUserStatus(userstatus);
      } catch (err) {
        console.log(err);
      }
    }
    handleMount();
    handleUser();
  }, [history, id, currentpk]);

    const getDogGender = (dog_gender) => {
    switch (dog_gender) {
      case 0:
        return 'TBC'; // To Be Confirmed
      case 1:
        return 'Male';
      case 2:
        return 'Female';
      default:
        return 'Unknown'; // Default case for unexpected input
    }
  };

  const getDogSize = (dog_size) => {
    switch (dog_size) {
      case 0:
        return 'TBC'; // To Be Confirmed
      case 1:
        return 'Small';
      case 2:
        return 'Large';
      default:
        return 'Unknown'; // Default case for unexpected input
    }
  };

  const getDogStatus = (status) => {
    switch (status) {
      case 0:
        return 'To arrive'; 
      case 1:
        return 'Not available';
      case 2:
        return 'Available';
      case 3:
      return 'Rehomed';
      default:
        return 'unknown'; // Default case for unexpected input
    }
  };

  const getBoolean = (value) => {
    switch (value) {
      case true: 
        return <i class="fa-solid fa-circle-check"></i>;
      case false:
        return <i class="fa-solid fa-circle-xmark"></i>;
      default:
        return <i class="fa-solid fa-circle-question"></i>;
    }
  }

  const handleEdit = () => {
    history.push(`/dog-profile/edit/${id}`);
  };

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={11}>
        {userStatus.is_superuser ? (<Button
          className={buttnStyle.buttn}
          onClick={handleEdit}
          aria-label="edit"
        >
          Edit
        </Button>) : (<p></p>)}
        <Image
            src={dog_image}
          />
          {currentpk ? (
          <Link to={`/request-adopt/create/${id}/`}>
            <Button className={buttnStyle.buttn}>
              Fill out adoption request
            </Button>
          </Link>) : ('')
          }
          {userStatus.is_staff ? (
            <Link to={`/posts/create/${id}/`}>
            <Button className={buttnStyle.buttn}>
              Add post for this dog
            </Button>
          </Link>
          ) : (<p></p>)}
          <h2 className="m-2"> {dog_name}</h2>
          {userStatus.is_staff ? (
            <>
              <h3 className="m-2"> received_date - {received_date} </h3>
              <h3 className="m-2"> rehomed_date - {rehomed_date} </h3>
              <h3 className="m-2"> returned_date - {returned_date} </h3>
              <h3 className="m-2"> at_rescue - {getBoolean(at_rescue)} </h3>
              <h3 className="m-2"> status - {getDogStatus(status)} </h3>
            </>) :
          (<p></p>)}
          <h3 className="m-2"> dog_age - {dog_age} </h3>
          <h3 className="m-2"> dog_breed - {dog_breed} </h3>
          <h3 className="m-2"> dog_gender - {getDogGender(dog_gender)} </h3>
          <h3 className="m-2"> dog_size - {getDogSize(dog_size)} </h3>
          <h3 className="m-2"> general - {general} </h3>
          <h3 className="m-2"> home_cats - {getBoolean(home_cats)} </h3>
          <h3 className="m-2"> home_dogs - {getBoolean(home_dogs)} </h3>
          <h3 className="m-2"> home_animals - {getBoolean(home_animals)} </h3>
          <h3 className="m-2"> home_children - {getBoolean(home_children)} </h3>
        </Col>
      </Row>
    </>
  );

  return (
    <>
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container className={appStyles.container}>
          {mainProfile}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      </Col>
    </Row>
    </>
  );
}

export default DogProfile;