import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
// import { useParams } from "react-router";
// import { axiosReq } from "../../api/axiosDefault";
// import {
//   useProfileData,
//   useSetProfileData,
// } from "../../contexts/ProfileDataContext";

import appStyles from "../../App.module.css"

function UserProfilePage() {
//   const [hasLoaded, setHasLoaded] = useState(false);

  const currentUser = useCurrentUser();

//   const { id } = useParams();
//   const setProfileData = useSetProfileData();
//   const { pageProfile } = useProfileData();
//   const [profile] = pageProfile.results;
//   const is_owner = currentUser?.username === profile?.owner;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [{ data: pageProfile }] = await Promise.all([
//           axiosReq.get(`/user_profile/${id}/`),
//         ]);
//         setProfileData((prevState) => ({
//           ...prevState,
//           pageProfile: { results: [pageProfile] },
//         }));
//         setHasLoaded(true);
//         console.log(pageProfile)
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [id, setProfileData]);

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={6}>
          <h3 className="m-2"> user name - {currentUser?.username}</h3>
          <h4>pk - {currentUser?.pk}</h4>
          <h4>email - {currentUser?.email}</h4>
          <h4>first_name - {currentUser?.first_name}</h4>
          <h4>last_name - {currentUser?.last_name}</h4>
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

export default UserProfilePage;