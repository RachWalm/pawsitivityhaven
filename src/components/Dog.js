import React from "react";
// import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { MoreDropdown } from "./MoreDropDown";
import { Link } from "react-router-dom";
import { useSetProfileData } from "../contexts/ProfileDataContext";
import Button from "react-bootstrap/Button";
import { useCurrentUser } from "../contexts/CurrentUserContext";


const Dog = (props) => {
  const {
    dog_id,
    dog_name,
    dog_age,
    dog_image,
  } = props;
  // const { id, favourite_id, owner } = profile;
  // const { handleFavourite, handleUnFavourite } = useSetProfileData();
  // const currentUser = useCurrentUser();
  return (
    <Card>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span>{dog_name}</span>
            <span>{dog_age}</span>
            {/* <span>{currentUser}</span> */}
            {/* <span>{is_owner && postPage && <MoreDropdown />}</span> */}
          </div>
          <div className="text-right">
        {/* {
          // !mobile &&
          currentUser &&
          // !is_owner &&
          (favourite_id ? (
            <Button
              onClick={() => handleUnFavourite(profile)}
            >
              unfollow
            </Button>
          ) : (
            <Button
              onClick={() => handleFavourite(profile)}
            >
              follow
            </Button>
          ))} */}
      </div>
        </Media>
      </Card.Body>
      <Link to={`/dog-profile/${dog_id}`}>
        <Card.Img src={dog_image} alt={dog_name} />
      </Link>
      <Card.Body>
        {dog_name && <Card.Title className="text-center">{dog_name}</Card.Title>}
        {dog_age && <Card.Text>{dog_age}</Card.Text>}
        
          <div>
          <Link to={`/dog-profile/${dog_id}`}>
            <i className="far fa-comments" />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Dog;