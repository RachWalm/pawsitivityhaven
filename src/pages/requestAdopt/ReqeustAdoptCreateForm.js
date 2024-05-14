import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Alert from "react-bootstrap/Alert";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefault"
import { useParams } from "react-router-dom/cjs/react-router-dom";


function RequestAdoptCreateForm() {
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const [requestAdopt, setRequestAdopt] = useState({
    dog_id: "",
    user_id: "",
    contact_permission: "",
    status: "",
    experience: "",
    query: "",
    home_cats: "",
    home_dogs: "",
    home_animals: "",
    home_children: "",
  });
  const { dog_id,
  user_id,
  contact_permission,
  status,
  experience,
  query,
  home_cats,
  home_dogs,
  home_animals,
  home_children, 
  } = requestAdopt;

  const history = useHistory();
  const currentUser = useCurrentUser();
  
  // useEffect(() => {
  //   const handleMount = async () => {
  //     const { data } = await axiosReq.get(`/user_profile/${id}/`);
  //     try {
  //       setRequestAdopt({
  //           ...requestAdopt,
  //           [user_id]: currentUser.user_id
  //       })
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   console.log(requestAdopt)
  //   console.log(currentUser)
  //   handleMount();
  // }, [currentUser]);


//   const handlePrefill = () => {
//     setRequestAdopt({
//         ...requestAdopt,
//         [user_id]: currentUser
//     })
//   }

  const handleChange = (event) => {
    setRequestAdopt({
      ...requestAdopt,
      [event.target.name]: event.target.value,
    });
  };

  const handleBooleanChange = (event) => {
    const { name, checked } = event.target;
    setRequestAdopt({
      ...requestAdopt,
      [name]: checked,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('dog_id', id);
    formData.append('user_id', currentUser);
    formData.append('contact_permission', contact_permission);
    formData.append('status', status);
    formData.append('experience', experience);
    formData.append('query', query);
    formData.append('home_cats', home_cats);
    formData.append('home_dogs', home_dogs);
    formData.append('home_animals', home_animals,);
    formData.append('home_children', home_children);

    try {
        const { data } = await axiosReq.post('/request_adopt_create/', formData);
        history.push(`/request-adopt/${data.id}`);
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
            <Form.Label >Dog </Form.Label>
            <Form.Control 
                type="text" 
                name="dog_id"
                value={dog_id}
                onChange={handleChange}
            />
        </Form.Group>
        {errors.dog_id?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
        
        <Form.Group>
            <Form.Label > Please tell us about your prior experience</Form.Label>
            <Form.Control 
                type="text-area" 
                name="experience"
                value={experience}
                onChange={handleChange}
                rows={9}
            />
        </Form.Group>
        {errors.experience?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

        <Form.Group>
            <Form.Label > Please discuss your query here</Form.Label>
            <Form.Control 
                type="text-area" 
                name="query"
                value={query}
                onChange={handleChange}
                rows={9}
            />
        </Form.Group>
        {errors.query?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}


          <Form.Check 
              type="checkbox"
              id="contact_permission"
              label="contact_permission"
              name="contact_permission"
              value={contact_permission}
              onChange={handleBooleanChange}
          />
          {errors.contact_permission?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

        <Form.Check 
              type="checkbox"
              id="home_dogs"
              label="home_dogs"
              name="home_dogs"
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
              label="home_cats"
              name="home_cats"
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
              label="home_animals"
              name="home_animals"
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
              label="home_children"
              name="home_children"
              value={home_children}
              onChange={handleBooleanChange}
          />
          {errors.home_children?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))} 
    
    
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
            <div className="d-md-none">{textFields}</div>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default RequestAdoptCreateForm;