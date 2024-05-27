import React, { useEffect, useState, useRef } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import buttnStyle from "../../styles/Buttn.module.css"
import appStyles from "../../App.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault"
import FormTitle from "../../components/FormTitle";

function DogProfileEditForm() {
  const { id } = useParams();
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
    dog_image: "",
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
  dog_image,
  at_rescue,
  status,
  general,
  home_cats,
  home_dogs,
  home_animals,
  home_children, 
  } = dogData;

  const history = useHistory();
  const imageInput = useRef(null);

  const received = (receiveddate) => {
    if (receiveddate === null) {
      setDogData({
        ...dogData,
        received_date: ""
      })
    }
  }

  const rehomed = (rehomeddate) => {
    if (rehomeddate === null) {
      setDogData({
        ...dogData,
        rehomed_date: ""
      })
    }
  }

  const returned = (returneddate) => {
    if (returneddate === null) {
      setDogData({
        ...dogData,
        returned_date: ""
      })
    }
  }

  const Time = () => {
    useEffect (() => {
      const timereceived = setTimeout(() => {
        received(received_date);
      }, 800);
      const timerehomed = setTimeout(() => {
        rehomed(rehomed_date);
      }, 1000);
      const timereturned = setTimeout(() => {
        returned(returned_date);
      }, 1200);
    }, []
    )
    return null;
  }

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
  }, [history, id ]);

  const handleChange = (event) => {
    setDogData({
      ...dogData,
      [event.target.name]: event.target.value,
    });
  };

  const handleBooleanChange = (event) => {
    const { name, checked } = event.target;
    setDogData({
      ...dogData,
      [name]: checked,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(dog_image);
      setDogData({
        ...dogData,
        dog_image: URL.createObjectURL(event.target.files[0]),
      });
    }
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
    formData.append('dog_gender', dog_gender);
    formData.append('dog_size', dog_size);
    formData.append('at_rescue', at_rescue);
    formData.append('status', status);
    formData.append('general', general);
    formData.append('home_cats', home_cats);
    formData.append('home_dogs', home_dogs);
    formData.append('home_animals', home_animals,);
    formData.append('home_children', home_children);
    if (imageInput?.current?.files[0]) {
      formData.append("dog_image", imageInput?.current?.files[0]);
    }

    try {
        await axiosReq.put(`/dog_profile/${id}/`, formData);
        history.push(`/dog-profile/${id}`);
    } catch (err) {
        console.log(err);
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
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>dog gender</Form.Label>
          <Form.Control as="select" custom name="dog_gender" htmlSize={3} value={dog_gender} onChange={handleChange}>
            <option label="TBC" value="0">0</option>
            <option label="Male" value="1">1</option>
            <option label="Female" value="2">2</option>
            
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>status</Form.Label>
          <Form.Control as="select" custom name="status" htmlSize={2} value={status} onChange={handleChange}>
            <option label="To arrive" value="0">0</option>
            <option label="Not available" value="1">1</option>
            <option label="Available" value="2">2</option>
            <option label="Rehomed" value="3">3</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>size</Form.Label>
          <Form.Control as="select" custom name="dog_size" htmlSize={3} value={dog_size} onChange={handleChange}>
            <option label="TBC" value="0">0</option>
            <option label="Small" value="1">1</option>
            <option label="Large" value="2">2</option>
            
          </Form.Control>
        </Form.Group>
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
        <Form.Group>
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
              label="at rescue?"
              name="at_rescue"
              checked={at_rescue}
              value={at_rescue}
              onChange={handleBooleanChange}
          />
          {errors.at_rescue?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

        <Form.Check 
              type="checkbox"
              id="home_dogs"
              label="home with dogs"
              name="home_dogs"
              checked={home_dogs}
              value={home_dogs}
              onChange={handleBooleanChange}
          />
          {errors.home_dogs?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

          <Form.Check 
              type="checkbox"
              id="home_cats"
              label="home with cats"
              name="home_cats"
              checked={home_cats}
              value={home_cats}
              onChange={handleBooleanChange}
          />
          {errors.home_cats?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

          <Form.Check 
              type="checkbox"
              id="home_animals"
              label="home with animals"
              name="home_animals"
              checked={home_animals}
              value={home_animals}
              onChange={handleBooleanChange}
          />
          {errors.home_animals?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

          <Form.Check 
              type="checkbox"
              id="home_children"
              label="home with children"
              name="home_children"
              checked={home_children}
              value={home_children}
              onChange={handleBooleanChange}
          />
          {errors.home_children?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))} 
    
    
      <Button className={buttnStyle.buttn}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={buttnStyle.buttn} type="submit">
        Edit
      </Button>
    </div>
  );

  return (
    <>
    <Time />
    <Container className={appStyles.container}>
      <FormTitle />
    </Container>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Container
            className="d-flex flex-column justify-content-center"
          >
            <Form.Group className="text-center">
              {dog_image ? (
                <>
                  <figure>
                    <Image src={dog_image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`btn ${buttnStyle.buttn}`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

          </Container>
                </Form.Label>

            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.container}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
    </>
  );
}

export default DogProfileEditForm;