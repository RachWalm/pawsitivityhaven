import React from "react";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/Dog.module.css"


const Dog = (props) => {
  const {
    id,
    dog_name,
    dog_gender,
    dog_breed,
    dog_image,
  } = props;
  // const { id, favourite_id, owner } = profile;
  // const { handleFavourite, handleUnFavourite } = useSetProfileData();
  // const addPostIcon = (<Link
  //     to={`/posts/create/${dog_id}`}>
  //     <i className="far fa-plus-square"></i>
  //     Add post
  //   </Link>)
  // const currentUser = useCurrentUser();

  const getDogGender = (dog_gender) => {
    switch (dog_gender) {
      case 0:
        return 'TBC'; // To Be Confirmed
      case 1:
        return 'Male';
      case 2:
        return 'Female';
      default:
        return 'Unknown'; // Default case for unexpected input
    }
  };

  return (
    <Card>
      <Card.Body>
        <Media>
          <Link to={`/dog-profile/${id}`}>
          <div className={styles.details}>
            <h4 className={styles.space}>Name: {dog_name}</h4>
            <h4 className={styles.space}>Gender: {getDogGender(dog_gender)}</h4>
            <h4 className={styles.space}>Breed: {dog_breed}</h4>
          </div>
          </Link>
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
      <Link to={`/dog-profile/${id}`}>
        <Card.Img src={dog_image} alt={dog_name} />
      </Link>
    </Card>
  );
};

export default Dog;