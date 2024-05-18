import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { useRedirect } from "../../hooks/useRedirect";
import { Link, useHistory, } from "react-router-dom";
import buttnStyle from "../../styles/Buttn.module.css"
import appStyles from "../../App.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import FormTitle from "../../components/FormTitle";


const SignInForm = () => {
    const setCurrentUser = useSetCurrentUser();
    useRedirect('loggedIn');

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const { username, password, } = signInData;
    const [errors, setErrors] = useState({});
    const history = useHistory();
    
    const handleChange = (event) => {
        setSignInData({
        ...signInData,
        [event.target.name]: event.target.value,
        });
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post("/dj-rest-auth/login/", signInData);
            setCurrentUser(data.user);
            history.goBack();
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
    <Col className="my-auto p-0 p-md-2" md={6}>
    <Container className={appStyles.container}>
        <h1>sign in</h1>
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

            <Form.Group controlId="password">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            
            <Button className={buttnStyle.buttn} type="submit">
                Sign in
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" >
                {message}
              </Alert>
            ))}
        </Form>

    </Container>
    <Container className={appStyles.container}>
        <Link to="/signup">
        Don't have an account? <span>Sign up now!</span>
        </Link>
    </Container>
    </Col>
    <Col
    md={6}
    className={`my-auto d-none d-md-block p-2 `}
    >
    <Image
        className={appStyles.SignupinImage }
        src={
        "https://res.cloudinary.com/dykxglqm8/image/upload/v1714480564/signup_xspsyt.jpg"
        } width={500}
    />
    </Col>
</Row>
</>
);
}

export default SignInForm;