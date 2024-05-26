import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams, useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import NavEditUser from "../../components/NavEditUser";


function ProfilePage() {
  const history = useHistory();
  const { id } = useParams();

  const [userProfileData, setUserProfileData] = useState({
    user_id: "",
    created_at: "",
    updated_at: "",
    first_name: "",
    last_name: "",
    email: "",    
    
  });
  const { user_id, created_at, updated_at, first_name, last_name, email, } = userProfileData;
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/user_profile/${id}/`);
        const { user_id, created_at, updated_at, first_name, last_name, email, } = data;
        setUserProfileData({ user_id, created_at, updated_at, first_name, last_name, email, });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={11}>
          <h2>Your profile details</h2>
          <h3 className="m-2"> Username - {user_id} </h3>
          <h3 className="m-2"> First created - {created_at} </h3>
          <h3 className="m-2"> Last updated - {updated_at} </h3>
          <h3 className="m-2"> First name - {first_name} </h3>
          <h3 className="m-2"> Last name - {last_name} </h3>
          <h3 className="m-2"> Email - {email} </h3>        
        </Col>
      </Row>
    </>
  );

  return (
    <Row>
      <Col>
        <Container className={appStyles.container}>
          <NavEditUser />
          {mainProfile}
        </Container>
      </Col>
    </Row>
  );
}

export default ProfilePage;