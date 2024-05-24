import React, { useEffect, useState, } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {
    useCurrentUser,
  } from "../contexts/CurrentUserContext";
import { axiosReq } from "../api/axiosDefault";
import Asset from "./Asset";
import { fetchMoreData } from "../utils/utils";
import NoResults from "../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import appStyles from "../App.module.css";
import Dog from "./Dog"

function SearchPicture({ message, filter = "" }) {
  const [dogData, setDogData] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [available, setAvailable] = useState(false);
  const currentUser = useCurrentUser();

  const getAvailable = (available) => {
    switch (available) {
      case true: 
        return 2;
      case false:
        return "";
      default:
        return "";
    }
  }

  useEffect(() => {
      const fetchDogs = async () => {
        try {
          const { data } = await axiosReq.get(`/dog_profile/?dog_gender=&dog_size=&home_cats=&home_dogs=&home_animals=&home_children=&status=${getAvailable(available.available)}&search=${query}`);
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
    }, [query, currentUser, filter, available]);
  

  const handleBooleanChange = (event) => {
    const { name, checked } = event.target;
    setAvailable({
      ...available,
      [name]: checked,
    });
  }
  
  return (
    <>
    <h2>Search or browse dogs</h2>
    <h3>Click on a dog for more information <br></br>
    (also access to request adoption form by clicking on your choice)</h3>
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <i className=
        "fas fa-search" />
        <Form.Group controlId="filterAvailable">
        <Form.Label>Filter by Available</Form.Label>
        <Form.Control 
          type="checkbox"
          default="false"
          name="available"
          value={available} 
          onChange={handleBooleanChange} 
        />
      </Form.Group>
        <Form
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search dogs name or breed"
          />
        </Form>

        {hasLoaded ? (
          <>
            {dogData.results.length ? (
              <InfiniteScroll
                children={dogData.results.map((dogData) => (
                  <div>
                    <Dog key={dogData.id} {...dogData} setDogData={setDogData} />
                  </div>
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