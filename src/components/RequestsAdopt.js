import React, { useState, useEffect } from "react";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Card, Media, } from "react-bootstrap";
import { MoreDropdown } from "./MoreDropDown";
import { Link } from "react-router-dom";
import { axiosRes, axiosReq } from "../api/axiosDefault"
import { useHistory } from "react-router";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const RequestsAdopt = (props, req) => {
  const {
    dog_id,
    user_id,
    contact_permission,
    home_children,
    home_cats,
    home_animals,
    home_dogs,
    experience ,
    query,
  } = props;

  const currentUser = useCurrentUser();
  // const is_current_owner = currentUser?.username === user_id;
  const history = useHistory();
  
  const handleEdit = () => {
    history.push(`/request-adopt/edit/${req}/`);
    console.log(dog_id);
    console.log(dog_name);
  };

  const handleDelete = async () => {
    try {
        await axiosRes.delete(`/request_adopt/${req}/`);
        history.goBack();
    } catch (err) {
        // console.log(err);
    }
  }

  const [dogData, setDogData] = useState({
    dog_name: "",
  });
  const { dog_name,
  } = dogData;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/dog_profile/${dog_id}/`);
        const { dog_name } = data;
        setDogData({ dog_name});
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(console.log(dog_id), 3000);
    handleMount();
  }, [history, dog_id]);

  const getBoolean = (value) => {
    switch (value) {
      case true: 
        return <i class="fa-solid fa-circle-check"></i>;
      case false:
        return <i class="fa-solid fa-circle-xmark"></i>;
      default:
        return <i class="fa-solid fa-circle-question"></i>;
    }
  }

  return (
    <Card>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <div className="d-flex align-items-end">
            <MoreDropdown handleEdit={handleEdit}  handleDelete={handleDelete}/>
          </div>
        </Media>
      </Card.Body>
      <Card.Body>
        {dog_id && <Card.Title className="text-center"><h2>You are interested in adopting {dog_name}</h2></Card.Title>}
        <Card.Text>
          <p>Home - cats {getBoolean(home_cats)}</p>
          <p>Home - children {getBoolean(home_children)}</p>
          <p>Home - dogs {getBoolean(home_dogs)}</p>
          <p>Home - other animals {getBoolean(home_animals)}</p>
          <p>Previous experience : {experience}</p> 
          <p>Query : {query}</p>
          <p>Contact permission {getBoolean(contact_permission)}</p>
        </Card.Text>
        
          
      </Card.Body>
    </Card>
  );
};

export default RequestsAdopt;