import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams, useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import NavEditUser from "../../components/NavEditUser";


function ProfilePage() {
  const history = useHistory();
  const { id } = useParams();

  const [userProfileData, setUserProfileData] = useState({
    user_id: "",
    created_at: "",
    updated_at: "",
    first_name: "",
    last_name: "",
    email: "",    
    
  });
  const { user_id, created_at, updated_at, first_name, last_name, email, } = userProfileData;
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/user_profile/${id}/`);
        const { user_id, created_at, updated_at, first_name, last_name, email, } = data;
        setUserProfileData({ user_id, created_at, updated_at, first_name, last_name, email, });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={11}>
          <h2>Your profile details</h2>
          <h3 className="m-2"> Username - {user_id} </h3>
          <h3 className="m-2"> First created - {created_at} </h3>
          <h3 className="m-2"> Last updated - {updated_at} </h3>
          <h3 className="m-2"> First name - {first_name} </h3>
          <h3 className="m-2"> Last name - {last_name} </h3>
          <h3 className="m-2"> Email - {email} </h3>        
        </Col>
      </Row>
      {/* <Row noGutters className="px-3 text-center">
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                onClick={() => {}}
              >
                unfollow
              </Button>
            ) : (
              <Button
                onClick={() => {}}
              >
                follow
              </Button>
            ))}
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row> */}
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">Profile owner's posts</p>
      <hr />
      {/* {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )} */}
    </>
  );

  return (
    <Row>
      <Col>
        <Container className={appStyles.container}>
          <NavEditUser />
          {mainProfile}
        </Container>
      </Col>
    </Row>
    // <Row>
    //   <Col className="py-2 p-0 p-lg-2" lg={8}>
    //     <Container className={appStyles.Content}>
    //       {/* {hasLoaded ? ( */}
    //         <>
    //           {mainProfile}
    //           {/* {mainProfilePosts} */}
    //         </>
    //       {/* ) : (
    //         <Asset spinner />
    //       )} */}
    //     </Container>
    //   </Col>
    //   <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
    //     {/* <PopularProfiles /> */}
    //   </Col>
    // </Row>
  );
}

export default ProfilePage;