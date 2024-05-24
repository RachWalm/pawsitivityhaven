import React, { useState } from "react";
import Media from "react-bootstrap/Media";
import CommentEditForm from "../pages/comments/CommentEditForm";
import { MoreDropdown } from "./MoreDropDown";
import { axiosRes } from "../api/axiosDefault";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const Comment = (props) => {
  const {
    user_id,
    updated_at,
    comment_content,
    id,
    setPost,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === user_id;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

  return (
    <>
      <hr />
      <Media>
        <Media.Body className="align-self-center ml-2">
          <p>This comment is from {updated_at}</p>
          <p>This comment was made by {user_id}</p>
          {showEditForm ? (
            <CommentEditForm
              comment_id={id}
              user_id={user_id}
              comment_content={comment_content}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{comment_content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Comment;