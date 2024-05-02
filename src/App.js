import NavBar from "./components/NavBar";
import NavSideBar from "./components/NavSideBar";
import styles from "./App.module.css";
import Container from "react-bootstrap/Container";
import {Route, Switch} from "react-router-dom";
import "./api/axiosDefault";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import DogProfileCreateForm from "./pages/dogProfile/DogProfileCreateForm";
import 


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <NavSideBar />
      <Container className={styles.main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/dog-profile/create" render={() => <DogProfileCreateForm />} />
          <Route exact path="/user-profile/" render={() => <UserProfilePage />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
