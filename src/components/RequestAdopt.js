import React, { useState, useEffect } from "react";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Card, Media, } from "react-bootstrap";
import { MoreDropdown } from "./MoreDropDown";
import { Link } from "react-router-dom";
import { axiosRes, axiosReq } from "../api/axiosDefault"
import { useHistory } from "react-router";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const RequestAdopt = (props) => {
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
  const { id } = useParams();
  
  const handleEdit = () => {
    history.push(`/request-adopt/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
        await axiosRes.delete(`/request_adopt/${id}/`);
        history.goBack();
    } catch (err) {
        // console.log(err);
    }
  }

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
          <div className="d-flex align-items-center">
            <span>{dog_id}</span>
            <span>{user_id} 
            </span>
            <p>home has cats {getBoolean(home_cats)}</p>
            <p>home has children {getBoolean(home_children)}</p>
            <p>home has dogs {getBoolean(home_dogs)}</p>
            <p>home has other animals {getBoolean(home_animals)}</p>
            <span><MoreDropdown handleEdit={handleEdit}  handleDelete={handleDelete}/></span>
          </div>
        </Media>
      </Card.Body>
      <Card.Body>
        {dog_id && <Card.Title className="text-center">{dog_id}</Card.Title>}
        <Card.Text>
          <p>Potential owner experience : {experience}</p> 
          <p>Query from potential owner: {query}</p>
          <p>contact permission {getBoolean(contact_permission)}</p>
        </Card.Text>
        
          
      </Card.Body>
    </Card>
  );
};

export default RequestAdopt;