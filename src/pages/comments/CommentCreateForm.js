import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import { axiosRes } from "../../api/axiosDefault";
import bttnStyles from "../../styles/Buttn.module.css";
import appStyles from "../../App.module.css"

function CommentCreateForm(props) {
  const { post_id, setPost, setComments, user_id } = props;
  const [comment_content, setComment_Content] = useState("");

  const handleChange = (event) => {
    setComment_Content(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        comment_content,
        post_id,
        user_id,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setComment_Content("");
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Container className={appStyles.container}>
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Form.Control
            placeholder="my comment..."
            as="textarea"
            value={comment_content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`btn d-block ml-auto ${bttnStyles.buttn}`}
        disabled={!comment_content.trim()}
        type="submit"
      >
        Comment
      </button>
    </Form>
    </Container>
  );
}

export default CommentCreateForm;