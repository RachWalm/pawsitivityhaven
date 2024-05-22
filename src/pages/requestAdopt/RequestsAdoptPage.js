import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import InfiniteScroll from "react-infinite-scroll-component";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";

import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

import Post from "../../components/Post";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import RequestAdopt from "../../components/RequestAdopt";

function RequestAdoptPage() {
  const [requests, setRequests] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/request_adopt/`);
        setRequests(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);
    return () => {
        clearTimeout(timer);
      };
    }, [filter, query, pathname, currentUser]);
  

  return (
    <Container className={appStyles.container}>
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? (
              <>
                {requests.results.length ? (
                  <InfiniteScroll
                    children={requests.results.map((post) => (
                      <RequestAdopt key={request.id} {...requestAdopt} setRequests={setRequests} />
                    ))}
                    dataLength={requests.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!requests.next}
                    next={() => fetchMoreData(requests, setRequests)}
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
    </Container>
  );
}

export default RequestAdoptPage;