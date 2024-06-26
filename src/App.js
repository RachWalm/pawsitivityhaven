import NavBar from "./components/NavBar";
import NavSideBar from "./components/NavSideBar";
import styles from "./App.module.css";
import Container from "react-bootstrap/Container";
import {Route, Switch} from "react-router-dom";
import "./api/axiosDefault";
import Home from "./pages/home/Home";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import UserProfilePage from "./pages/userProfile/UserProfilePage";
import UsernameForm from "./pages/userProfile/UsernameForm";
import UserPasswordForm from "./pages/userProfile/UserPasswordForm";
import ProfileEditForm from "./pages/userProfile/ProfileEditForm";
import DogProfile from "./pages/dogProfile/DogProfile";
import DogProfileCreateForm from "./pages/dogProfile/DogProfileCreateForm";
import DogProfileEditForm from "./pages/dogProfile/DogProfileEditForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostEditForm from "./pages/posts/PostEditForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import RequestAdoptCreateForm from "./pages/requestAdopt/ReqeustAdoptCreateForm";
import RequestAdoptPage from "./pages/requestAdopt/RequestAdoptPage";
import RequestsAdoptPage from "./pages/requestAdopt/RequestsAdoptPage";
import RequestAdoptEditForm from "./pages/requestAdopt/RequestAdoptEditForm";
import { Row, Col } from "react-bootstrap";
import Notfound from "./components/NotFound";




function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Row>
        <Col xs={12} xl={1} className="d-flex justify-content-start">
          <NavSideBar />
        </Col>
        <Col xs={11} className="d-flex justify-content-end">
          <Container className={styles.main}>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/dog-profile/create" render={() => <DogProfileCreateForm />} />
              <Route exact path="/dog-profile/:id" render={() => <DogProfile />} />
              <Route exact path="/dog-profile/edit/:id" render={() => <DogProfileEditForm />} />
              <Route exact path="/user-profile/:id" render={() => <UserProfilePage />} />
              <Route exact path="/user-profile/edit/username/:id" render={() => <UsernameForm/>} />
              <Route exact path="/user-profile/edit/password/:id" render={() => <UserPasswordForm />}/>
              <Route exact path="/user-profile/edit/:id" render={() => <ProfileEditForm />}/>
              <Route exact path="/posts/create/:id" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id/edit/" render={() => <PostEditForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route exact path="/request-adopt/create/:id" render={() => <RequestAdoptCreateForm />} />
              <Route exact path="/request-adopt/edit/:id" render={() => <RequestAdoptEditForm />} />
              <Route exact path="/request-adopt/:id" render={() => <RequestAdoptPage />} />
              <Route exact path="/requests-adopt" render={() => <RequestsAdoptPage />} />
              <Route exact path="/feed" render={() => <PostsPage />} />
              <Route render={() => <Notfound />} />
            </Switch>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default App;
