import React, { useState, useEffect } from "react";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Card, Media, } from "react-bootstrap";
import { MoreDropdown } from "./MoreDropDown";
import { Link } from "react-router-dom";
import { axiosRes, axiosReq } from "../api/axiosDefault"
import { useHistory } from "react-router";

const Post = (props) => {
  const {
    id,
    user_id,
    title,
    content,
    image,
    is_owner,
    updated_at,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  // const is_current_owner = currentUser?.username === user_id;
  const history = useHistory();

//   const [dogData, setDogData] = useState({
//     dog_name: "",
//     received_date: "",
//     rehomed_date: "",
//     returned_date: "",
//     dog_age: "",
//     dog_breed: "",
//     dog_gender: "",
//     dog_size: "",
//     dog_image: "https://res.cloudinary.com/dykxglqm8/image/upload/v1/media/../dog-image-na_zmmfot",
//     at_rescue: "",
//     status: "",
//     general: "",
//     home_cats: "",
//     home_dogs: "",
//     home_animals: "",
//     home_children: "",
// });
// const { dog_name, received_date, rehomed_date, returned_date, dog_age, dog_breed, dog_gender, dog_size, dog_image, at_rescue, status, general, home_cats, home_dogs, home_animals, home_children, } = dogData;

  // useEffect(() => {
  //   const handleMount = async () => {
  //     try {
  //       const { data } = await axiosReq.get(`/dog_profile/${dog_id}/`);
  //       const { dog_name, received_date, rehomed_date, returned_date, dog_age, dog_breed, dog_gender, dog_size, dog_image, at_rescue, status, general,
  //         home_cats, home_dogs, home_animals, home_children, } = data;
  //       setDogData({ dog_name, received_date, rehomed_date, returned_date, dog_age, dog_breed, dog_gender,
  //         dog_size, dog_image, at_rescue, status, general, home_cats, home_dogs, home_animals,
  //         home_children,});

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   handleMount();
  //   // console.log(is_owner)
  // }, [history, id]);
  
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
        await axiosRes.delete(`/posts/${id}/`);
        history.goBack();
    } catch (err) {
        // console.log(err);
    }
  }
  return (
    <Card>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            <span>{user_id}</span>
            <span>{user_id} 
            {/* <Link to={`/dog-profile/${dog_id}`}>
              <Card.Img src={dog_image} alt={dog_name} />
            </Link> */}
            </span>
            <span>{is_owner && postPage && <MoreDropdown handleEdit={handleEdit}  handleDelete={handleDelete}/>}</span>
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        {/* 
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count} */}
          <div>
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;