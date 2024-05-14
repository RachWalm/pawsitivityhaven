import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import InfiniteScroll from "react-infinite-scroll-component";

// import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";

import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

import Post from "../../components/Post";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import RequestAdopt from "../../components/RequestAdopt";

function RequestAdoptPage() {
  const { id } = useParams();
  const [requestAdopt, setRequestAdopt] = useState({
    user_id: "",
    dog_id: "",
    created_at: "",
    updated_at: "",
    contact_permission:  "",
    home_children: "",
    home_cats: "",
    home_animals: "",
    home_dogs: "",
    experience: "",
    query: "",
  });
  const { user_id, dog_id, created_at, updated_at, contact_permission, home_children, home_cats, home_animals, home_dogs, experience, query, } = requestAdopt
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/request_adopt/${id}/`);
        const { user_id, dog_id, created_at, updated_at, contact_permission, home_children, home_cats, home_animals, home_dogs, experience, query, } = data;
        setRequestAdopt({ user_id, dog_id, created_at, updated_at, contact_permission, home_children, home_cats, home_animals, home_dogs, experience, query, });
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
    console.log(requestAdopt);
  }, [id,]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <RequestAdopt {...requestAdopt} />
      </Col>
    </Row>
  );
}

export default RequestAdoptPage;