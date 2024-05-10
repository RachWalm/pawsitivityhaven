import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Alert from "react-bootstrap/Alert";
// import Image from "react-bootstrap/Image";

// import Asset from "../../components/Asset";

// import Upload from "../../assets/upload.png";

// import styles from "../../styles/PostCreateEditForm.module.css";
// import appStyles from "../../App.module.css";
// import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefault"
// import { useRedirect } from "../../hooks/useRedirect";

function DogProfileCreateForm() {

  const [errors, setErrors] = useState({});
  const [dogData, setDogData] = useState({
    dog_name: "",
    received_date: "",
    rehomed_date: "",
    returned_date: "",
    dog_age: "",
    dog_breed: "",
    dog_gender: "",
    dog_size: "",
    at_rescue: "",
    status: "",
    general: "",
    home_cats: "",
    home_dogs: "",
    home_animals: "",
    home_children: "",
  });
  const { dog_name,
  received_date,
  rehomed_date,
  returned_date,
  dog_age,
  dog_breed,
  dog_gender,
  dog_size,
  // dog_image,
  at_rescue,
  status,
  general,
  home_cats,
  home_dogs,
  home_animals,
  home_children, } = dogData;

  const history = useHistory();

  const handleChange = (event) => {
    setDogData({
      ...dogData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('dog_name', dog_name);
    formData.append('received_date', received_date);
    formData.append('rehomed_date', rehomed_date);
    formData.append('returned_date', returned_date);
    formData.append('dog_age', dog_age);
    formData.append('dog_breed', dog_breed);
    // formData.append('dog_gender', dog_gender);
    // formData.append('dog_size', dog_size);
    formData.append('at_rescue', at_rescue);
    // formData.append('status', status);
    formData.append('general', general);
    formData.append('home_cats', home_cats);
    formData.append('home_dogs', home_dogs);
    formData.append('home_animals,', home_animals,);
    formData.append('home_children', home_children);
    
    // formData.append('image', imageInput.current.files[0]);

    try {
        const { data } = await axiosReq.post('/dog_profile_create/', formData);
        history.push(`/dog-profile/${data.id}`);
    } catch (err) {
        // console.log(err);
        if (err.response?.status !== 401) {
            setErrors(err.response?.data);
        }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
            <Form.Label >Dog Name</Form.Label>
            <Form.Control 
                type="text" 
                name="dog_name"
                value={dog_name}
                onChange={handleChange}
            />
        </Form.Group>
        {errors.dog_name?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
        <Form.Group>
            <Form.Label >Received date</Form.Label>
            <Form.Control 
                type="date" 
                name="received_date"
                value={received_date}
                onChange={handleChange}
            />
        </Form.Group>
        {errors.received_date?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
        <Form.Group>
        <Form.Group>
            <Form.Label >Rehomed date</Form.Label>
            <Form.Control 
                type="date" 
                name="rehomed_date"
                value={rehomed_date}
                onChange={handleChange}
            />
        </Form.Group>
        {errors.rehomed_date?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
          <Form.Group>
            <Form.Label >Returned date</Form.Label>
            <Form.Control 
                type="date" 
                name="returned_date"
                value={returned_date}
                onChange={handleChange}
            />
        </Form.Group>
        {errors.returned_date?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
        <Form.Group>
            <Form.Label >Dog age</Form.Label>
            <Form.Control 
                type="integer" 
                name="dog_age"
                value={dog_age}
                onChange={handleChange}
            />
        </Form.Group>
        {errors.dog_age?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
        <Form.Group>
            <Form.Label >General information</Form.Label>
            <Form.Control 
                type="text-area" 
                name="general"
                value={general}
                onChange={handleChange}
                rows={9}
            />
        </Form.Group>
        {errors.general?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
        
            <Form.Label>Dog Breed</Form.Label>
            <Form.Control 
                type="text"
                name="dog_breed"
                value={dog_breed}
                onChange={handleChange}
            />
        </Form.Group>
        {errors.dog_breed?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}


        <Form.Check 
            type="checkbox"
            id="at_rescue"
            label="at_rescue"
            name="at_rescue"
            value={at_rescue}
            onChange={handleChange}
        />
        {errors.at_rescue?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

        <Form.Check 
            type="radio"
            id="home_cats"
            label="home_cats"
            name="home_cats"
            value={home_cats}
            onChange={handleChange}
        />
        {errors.at_rescue?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
        <Form.Check 
            type="radio"
            id="home_dogs"
            label="home_dogs"
            name="home_dogs"
            value={home_dogs}
            onChange={handleChange}
        />
        {errors.home_dogs?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
        <Form.Check 
            type="radio"
            id="home_animals"
            label="home_animals"
            name="home_animals"
            value={home_animals}
            onChange={handleChange}
        />
        {errors.home_animals?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
        <Form.Check 
            type="radio"
            id="home_children"
            label="home_children"
            name="home_children"
            value={home_children}
            onChange={handleChange}
        />
        {errors.home_children?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
        {/* {['checkbox', 'radio', 'radio'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label={`default ${type}`}
            />
            <Form.Check 
              type="checkbox"
              id="at_rescue"
              label="at_rescue"
            />
          </div>
  ))} */}
    
    
      <Button
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className="d-flex flex-column justify-content-center"
          >
            <Form.Group className="text-center">
              
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  ASSET
                </Form.Label>

            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default DogProfileCreateForm;