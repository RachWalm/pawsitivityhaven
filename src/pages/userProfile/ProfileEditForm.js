import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefault";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import appStyles from "../../App.module.css";
import NavEditUser from "../../components/NavEditUser";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  // const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const { first_name, last_name, email } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      // if (currentUser?.user_profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/user_profile/1/`);
          const { first_name, last_name, email } = data;
          setProfileData({ first_name, last_name, email });
          console.log(data);
        } catch (err) {
          console.log(err);
          history.push("/");
        }
      // } else {
      //   history.push("/");
      // }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);

    // if (imageFile?.current?.files[0]) {
    //   formData.append("image", imageFile?.current?.files[0]);
    }

  //   try {
  //     const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
  //     setCurrentUser((currentUser) => ({
  //       ...currentUser,
  //       profile_image: data.image,
  //     }));
  //     history.goBack();
  //   } catch (err) {
  //     console.log(err);
  //     setErrors(err.response?.data);
  //   }
  // };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          as="text"
          value={first_name}
          onChange={handleChange}
          name="first_name"
        />
      </Form.Group>

      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          as="text"
          value={last_name}
          onChange={handleChange}
          name="last_name"
        />
      </Form.Group>

      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          as="text"
          value={email}
          onChange={handleChange}
          name="email"
        />
      </Form.Group>

      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button type="submit">
        save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        <Col>
          <NavEditUser />
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;