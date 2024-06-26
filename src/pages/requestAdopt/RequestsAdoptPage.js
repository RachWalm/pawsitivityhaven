import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import InfiniteScroll from "react-infinite-scroll-component";

import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefault";

import Asset from "../../components/Asset";
import NoResults from "../../assets/noresults.png"
import { fetchMoreData } from "../../utils/utils";

import RequestsAdopt from "../../components/RequestsAdopt";
import FormTitle from "../../components/FormTitle";

import { useCurrentUser } from "../../contexts/CurrentUserContext";


function RequestsAdoptPage() {
  const [requests, setRequests] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const { data } = await axiosReq.get(`/request_adopt/`);
        setRequests(data);
        setHasLoaded(true);
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    fetchRequests();
    }, [currentUser]);
  

  return (
    <>
    <Container className={appStyles.container}>
      <FormTitle />
    </Container>
    <Container className={appStyles.container}>
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? (
              <>
                {requests.results.length ? (
                  <InfiniteScroll
                    children={requests.results.map((req) => (
                      <RequestsAdopt key={req.id} {...req} setRequests={setRequests} />
                    ))}
                    dataLength={requests.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!requests.next}
                    next={() => fetchMoreData(requests, setRequests)}
                  />
                ) : (
                  <Container className={appStyles.Content}>
                    <Asset src={NoResults} />
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
    </>
  );
}

export default RequestsAdoptPage;