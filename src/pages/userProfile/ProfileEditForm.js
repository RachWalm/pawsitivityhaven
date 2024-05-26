import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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

  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const { first_name, last_name, email } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
        try {
          const { data } = await axiosReq.get(`/user_profile/${id}/`);
          const { first_name, last_name, email } = data;
          setProfileData({ first_name, last_name, email });
        } catch (err) {
          console.log(err);
          history.push("/");
        }
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
    console.log(formData);

    try {
      const { data } = await axiosReq.put(`/user_profile/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          placeholder="first name"
          as="textarea"
          value={first_name}
          onChange={handleChange}
          name="first_name"
          rows={1}
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
          placeholder="last name"
          as="textarea"
          value={last_name}
          onChange={handleChange}
          name="last_name"
          rows={1}
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
          placeholder="email address"
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          rows={1}
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