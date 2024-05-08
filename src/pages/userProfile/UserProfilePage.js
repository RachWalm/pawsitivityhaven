import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// import Asset from "../../components/Asset";

// import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
// import btnStyles from "../../styles/Button.module.css";

// import PopularProfiles from "./PopularProfiles";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams, useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import NavEditUser from "../../components/NavEditUser";
// import {
//   useProfileData,
//   useSetProfileData,
// } from "../../contexts/ProfileDataContext";
// import { Button, Image } from "react-bootstrap";

function ProfilePage() {
  // const [hasLoaded, setHasLoaded] = useState(false);
  // const currentUser = useCurrentUser();
  const history = useHistory();
  const { id } = useParams();
  
  // const setProfileData = useSetProfileData();
  // const { pageProfile } = useProfileData();
  // const [profile] = pageProfile.results;
  

  // const [errors, setErrors] = useState({});

  const [userProfileData, setUserProfileData] = useState({
    user_id: "",
    created_at: "",
    updated_at: "",
    first_name: "",
    last_name: "",
    email: "",    
    
  });
  const { user_id, created_at, updated_at, first_name, last_name, email, } = userProfileData;
  // const is_owner = currentUser?.username === userProfileData?.user_id;
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/user_profile/${id}/`);
        const { user_id, created_at, updated_at, first_name, last_name, email, } = data;

        setUserProfileData({ user_id, created_at, updated_at, first_name, last_name, email, });
          console.log('anmi')
          console.log(data.first_name)
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [{ data: pageProfile }] = await Promise.all([
  //         axiosReq.get(`/profiles/${id}/`),
  //       ]);
  //       setProfileData((prevState) => ({
  //         ...prevState,
  //         pageProfile: { results: [pageProfile] },
  //       }));
  //       setHasLoaded(true);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, [id, setProfileData]);

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={11}>
          <h3 className="m-2"> User Id - {user_id} </h3>
          <h3 className="m-2"> created_at - {created_at} </h3>
          <h3 className="m-2"> updated_at - {updated_at} </h3>
          <h3 className="m-2"> First name - {first_name} </h3>
          <h3 className="m-2"> last_name - {last_name} </h3>
          <h3 className="m-2"> email - {email} </h3>
                   
        
        {/* dog_image: "https://res.cloudinary.com/dykxglqm8/image/upload/v1/media/../dog-image-na_zmmfot",
        */}
        </Col>
      </Row>
      {/* <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                onClick={() => {}}
              >
                unfollow
              </Button>
            ) : (
              <Button
                onClick={() => {}}
              >
                follow
              </Button>
            ))}
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row> */}
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">Profile owner's posts</p>
      <hr />
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container className={appStyles.Content}>
          {/* {hasLoaded ? ( */}
            <>
              {mainProfile}
              {mainProfilePosts}
              <NavEditUser />
            </>
          {/* ) : (
            <Asset spinner />
          )} */}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        {/* <PopularProfiles /> */}
      </Col>
    </Row>
  );
}

export default ProfilePage;