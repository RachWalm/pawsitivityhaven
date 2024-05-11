import React from "react";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { MoreDropdown } from "./MoreDropDown";
import { Link } from "react-router-dom";
import { axiosRes } from "../api/axiosDefault"
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
          <div>
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {/* {comments_count} */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;