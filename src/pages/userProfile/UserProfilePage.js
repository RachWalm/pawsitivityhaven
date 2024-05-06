import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
// import {
//   useProfileData,
//   useSetProfileData,
// } from "../../contexts/ProfileDataContext";

import { ProfileEditDropdown } from "../../components/MoreDropDown";

import appStyles from "../../App.module.css"
import NavEditUser from "../../components/NavEditUser";

function UserProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);

  const currentUser = useCurrentUser();

  const { id } = 1;
  // const { setProfileData } = useSetProfileData();
  // const { pageProfile } = useProfileData();
  // const [profile] = pageProfile.results;
  // const is_owner = currentUser?.username === profile?.owner;

  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }] = await Promise.all([
          axiosReq.get(`/user_profile/1/`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        console.log(pageProfile)
        setHasLoaded(true);
        console.log(profileData)
      } catch (err) {
        console.log(err);
      }
    };
    console.log(profileData)
    fetchData();
    console.log(profileData)
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profileData?.is_owner && <ProfileEditDropdown id={profileData?.id} />}
      <Row noGutters className="px-3 text-center">
        <col lg={1}>

        </col>
        <Col lg={6}>
          <h3 className="m-2"> user name - {currentUser?.username}</h3>
          <h4>pk - {currentUser?.pk}</h4>
          <h4>email - {currentUser?.email}</h4>
          <h4>first_name - {currentUser?.first_name}</h4>
          <h4>last_name - {currentUser?.last_name}</h4>
        </Col>
        <Col lg={4}>
          <NavEditUser />
        </Col>
      </Row>
      <NavEditUser />
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

export default UserProfilePage;