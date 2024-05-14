import React, { useEffect, useState, } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import { useParams } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefault";
import FavouriteDogProfiles from "./FavouriteDogProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { MoreDropdown } from "../../components/MoreDropDown";

import appStyles from "../../App.module.css";
import { Link } from "react-router-dom";

import { useHistory } from "react-router";
import { Button } from "react-bootstrap";

function DogProfile() {
  const [errors, setErrors] = useState({});
  // const {setProfileData, handleFavourite, handleUnFavourite} = useSetProfileData();
  const currentUser = useCurrentUser();
  // const { pageProfile } = useProfileData();
  // const [profile] = pageProfile.results;
  const [dogData, setDogData] = useState({
        id: "",
        dog_name: "",
        received_date: "",
        rehomed_date: "",
        returned_date: "",
        dog_age: "",
        dog_breed: "",
        dog_gender: "",
        dog_size: "",
        dog_image: "https://res.cloudinary.com/dykxglqm8/image/upload/v1/media/../dog-image-na_zmmfot",
        at_rescue: "",
        status: "",
        general: "",
        home_cats: "",
        home_dogs: "",
        home_animals: "",
        home_children: "",
  });
  const { dog_name, received_date, rehomed_date, returned_date, dog_age, dog_breed, dog_gender, dog_size, dog_image, at_rescue, status, general, home_cats, home_dogs, home_animals, home_children, } = dogData;

  // const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();
  const [hasLoaded, setHasLoaded] = useState(false);

  // const [userProfileData, setUserProfileData] = useState({
  //   user_id: "",
  //   created_at: "",
  //   updated_at: "",
  //   first_name: "",
  //   last_name: "",
  //   email: "",    
  // });


  const is_owner = currentUser?.username === useProfileData?.user_id;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/dog_profile/${id}/`);
        const { dog_name, received_date, rehomed_date, returned_date, dog_age, dog_breed, dog_gender, dog_size, dog_image, at_rescue, status, general,
          home_cats, home_dogs, home_animals, home_children, } = data;
        setDogData({ dog_name, received_date, rehomed_date, returned_date, dog_age, dog_breed, dog_gender,
          dog_size, dog_image, at_rescue, status, general, home_cats, home_dogs, home_animals,
          home_children,});
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [history, id]);

  // useEffect(() => {
  //   const handleMount = async () => {
  //     try {
  //       const { data } = await axiosReq.get(`/dog_profile/${id}/`);
  //       const { dog_name, received_date, rehomed_date, returned_date, dog_age, dog_breed, dog_gender, dog_size, dog_image, at_rescue, status, general,
  //         home_cats, home_dogs, home_animals, home_children, } = data;

  //       setDogData({ dog_name, received_date, rehomed_date, returned_date, dog_age, dog_breed, dog_gender,
  //         dog_size, dog_image, at_rescue, status, general, home_cats, home_dogs, home_animals,
  //         home_children,  });
  //         console.log('anmi')
  //         console.log(data.home_cats)
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   handleMount();
  // }, [history, id]);

  

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

  const handleDelete = async () => {
    try {
        await axiosRes.delete(`/dog_profile/${id}/`);
        history.goBack();
    } catch (err) {
        // console.log(err);
    }
  }

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={11}>
        <span><MoreDropdown handleEdit={handleEdit}  handleDelete={handleDelete}/></span>
          {/* <h1>{currentUser}</h1> */}
        <Image
            roundedCircle
            src={dog_image}
          />
          <Link to={`/request-adopt/create/${id}/`}>
            <Button>
              Fill out adoption request
            </Button>
          </Link>
          <h3 className="m-2"> Dog name - {dog_name}</h3>
          <h3 className="m-2"> received_date - {received_date} </h3>
          <h3 className="m-2"> rehomed_date - {rehomed_date} </h3>
          <h3 className="m-2"> returned_date - {returned_date} </h3>
          <h3 className="m-2"> dog_age - {dog_age} </h3>
          <h3 className="m-2"> dog_breed - {dog_breed} </h3>
          <h3 className="m-2"> dog_gender - {getDogGender(dog_gender)} </h3>
          <h3 className="m-2"> dog_size - {getDogSize(dog_size)} </h3>
          <h3 className="m-2"> status - {getDogStatus(status)} </h3>
          <h3 className="m-2"> general - {general} </h3>
          <h3 className="m-2"> at_rescue - {getBoolean(at_rescue)} </h3>
          <h3 className="m-2"> home_cats - {getBoolean(home_cats)} </h3>
          <h3 className="m-2"> home_dogs - {getBoolean(home_dogs)} </h3>
          <h3 className="m-2"> home_animals - {getBoolean(home_animals)} </h3>
          <h3 className="m-2"> home_children - {getBoolean(home_children)} </h3>
          
        
        {/* dog_image: "https://res.cloudinary.com/dykxglqm8/image/upload/v1/media/../dog-image-na_zmmfot",
        */}
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
    <Row noGutters className="px-3 text-center">
      {/* <Col lg={3} className="text-lg-left">
        <Image
          roundedCircle
          src={profile?.image}
        />
      </Col> */}
      <Col lg={6}>
        <h3 className="m-2">profile?.owner</h3>
        <Row className="justify-content-center no-gutters">
          <Col xs={3} className="my-2">
            <div>profile?.favourited_count</div>
            <div>Favourite</div>
          </Col>
          <Col xs={3} className="my-2">
            <div>profile?.favourited_count</div>
            <div>Favourite</div>
          </Col>
        </Row>
      </Col>
      <Col lg={3} className="text-lg-right">
        {/* {currentUser &&
          !is_owner &&
          (profile?.favourite_id ? (
            <Button
              onClick={() => {handleUnFavourite()}}
            >
              unfavourite
            </Button>
          ) : (
            <Button
              onClick={() => {handleFavourite()}}
            >
              favourite
            </Button>
          ))} */}
      </Col>
      {/* {profile?.content && <Col className="p-3">{profile.content}</Col>} */}
    </Row>
    </>
  );
}

export default DogProfile;