import React, { useState, useEffect } from "react";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Card, Media, } from "react-bootstrap";
import { MoreDropdown } from "./MoreDropDown";
import { axiosRes, axiosReq } from "../api/axiosDefault"
import { useHistory } from "react-router";

const RequestsAdopt = (props) => {
  const {
    id,
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
  const is_current_owner = currentUser?.pk === user_id;
  const history = useHistory();
  
  const handleEdit = () => {
    history.push(`/request-adopt/edit/${id}/`);
  };

  const handleDelete = async () => {
    try {
        await axiosRes.delete(`/request_adopt/${id}/`);
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

  const [staffData, setStaffData] = useState({
    is_staff: "",
  });
  const { is_staff } = staffData;

  const [adopterData, setAdopterData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const { first_name, last_name, email, } = adopterData;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/dog_profile/${dog_id}/`);
        const { dog_name } = data;
        setDogData({ dog_name });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosReq.get(`/user_profile/${currentUser.pk}/`);
        const { is_staff } = data;
        setStaffData({ is_staff });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosReq.get(`/user_profile/${user_id}/`);
        const { first_name, last_name, email, } = data;
        setAdopterData({ first_name, last_name, email, });
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(console.log(currentUser.username), 3000);
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

  const visible = is_staff|is_current_owner

  return (
    <>
    {visible ? (<>
    <Card>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <div className="d-flex align-items-end">
            <MoreDropdown handleEdit={handleEdit}  handleDelete={handleDelete}/>
          </div>
        </Media>
      </Card.Body>
      <Card.Body>
        {is_current_owner && <Card.Title className="text-center">
          <h2>You are interested in adopting {dog_name}</h2>
          <h3>Please ensure your profile is up to date so we can contact you.</h3>
        </Card.Title>}
        {is_staff && <Card.Title className="text-center">
          <h2>Dog name - {dog_name}</h2>
          <h3>First name - {first_name}</h3>
          <h3>Last name - {last_name}</h3>
          <h3>Email - {email}</h3>
        </Card.Title>}
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
    </>) : (<></>)}
    </>
  );
};

export default RequestsAdopt;