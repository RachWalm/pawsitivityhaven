import React, { useState, useEffect } from "react";
import { Card, Media, } from "react-bootstrap";
import { MoreDropdown } from "./MoreDropDown";
import { Link } from "react-router-dom";
import { axiosRes, axiosReq } from "../api/axiosDefault"
import { useHistory } from "react-router";

const Post = (props) => {
  const {
    id,
    dog_id,
    user_id,
    title,
    content,
    image,
    is_owner,
    updated_at,
    postPage,
  } = props;

  const history = useHistory();

  const [dogData, setDogData] = useState({
    dog_name: "",
    dog_image: "",
});
const { dog_name, dog_image, } = dogData;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/dog_profile/${dog_id}/`);
        const { dog_name, dog_image, } = data;
        setDogData({ dog_name, dog_image, });

      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [history, id, dog_id]);
  
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
        await axiosRes.delete(`/posts/${id}/`);
        history.goBack();
    } catch (err) {
        console.log(err);
    }
  }
  return (
    <Card>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <p>This was posted {updated_at} by {user_id} for dog {dog_name}
            <Link to={`/dog-profile/${dog_id}`}>
              <Card.Img src={dog_image} alt={dog_name} />
            </Link>
            </p>
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
      </Card.Body>
    </Card>
  );
};

export default Post;