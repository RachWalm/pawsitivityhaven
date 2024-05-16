import React, { useEffect, useState, } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

import {
    useCurrentUser,
    useSetCurrentUser,
  } from "../contexts/CurrentUserContext";

// import { useParams } from "react-router";
import { axiosReq } from "../api/axiosDefault";

import Asset from "./Asset";
import { fetchMoreData } from "../utils/utils";
import NoResults from "../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";

import appStyles from "../App.module.css";
import DogProfile from "../pages/dogProfile/DogProfile";
import Dog from "./Dog"

// import { useHistory } from "react-router";

function SearchPicture({ message, filter = "" }) {
    const [dogData, setDogData] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    // const { pathname } = useLocation();
  
    const [query, setQuery] = useState("");
  
    const currentUser = useCurrentUser();
  
    useEffect(() => {
        const fetchDogs = async () => {
          try {
            const { data } = await axiosReq.get(`/dog_profile/?${filter}search=${query}`);
            setDogData(data);
            console.log(data)
            setHasLoaded(true);
          } catch (err) {
            // console.log(err);
          }
        };
    
        setHasLoaded(false);
        const timer = setTimeout(() => {
          fetchDogs();
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
      }, [filter, query, currentUser]);
  
    return (
      <>
      <h2>Search then get more info on dogs below by clicking on their image</h2>
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          <i className=
          "fas fa-search" />
          <Form
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search dogs"
            />
          </Form>
  
          {hasLoaded ? (
            <>
              {dogData.results.length ? (
                <InfiniteScroll
                  children={dogData.results.map((dogData) => (
                    <Dog key={dogData.id} {...dogData} setDogData={setDogData} />
                  ))}
                  dataLength={dogData.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!dogData.next}
                  next={() => fetchMoreData(dogData, setDogData)}
                />
              ) : (
                <Container className={appStyles.Content}>
                  <Asset src={NoResults} message={message} />
                </Container>
              )}
            </>
          ) : (
            <Container className={appStyles.Content}>
              <Asset spinner />
            </Container>
          )}
        </Col>
      </Row>
      </>
    );
  }

export default SearchPicture