import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import appStyles from "../../App.module.css";
import axios from "axios";
import buttnStyle from "../../styles/Buttn.module.css";
import { useRedirect } from "../../hooks/useRedirect";
import { Form,
  Button,
  Image,
  Col,
  Row,
  Container,
  Alert, } from "react-bootstrap";
import FormTitle from "../../components/FormTitle";


const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;
  const [errors, setErrors] = useState({});
  const history = useHistory();
  useRedirect('loggedIn');
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
      console.log(err)
    }
  };

  return (
    <>
    <Container className={appStyles.container}>
      <FormTitle />
    </Container>
    <Row>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={appStyles.container}>
          <h1>sign up</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            
            <Button className={buttnStyle.buttn} type="submit">
              Sign up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" >
                {message}
              </Alert>
            ))}
          </Form>

        </Container>
        <Container className={appStyles.container}>
          <Link to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2`}
      >
        <Image
          className={`${appStyles.SignupinImage}`}
          src={
            "https://res.cloudinary.com/dykxglqm8/image/upload/v1714480564/signup_xspsyt.jpg"
          } width={500}
        />
      </Col>
    </Row>
    </>
  );
};

export default SignUpForm;