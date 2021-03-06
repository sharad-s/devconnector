import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// jwtToken
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// Actions
import { setCurrentUser } from "./actions/authActions";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

// CSS
import "./App.css";

// Routes
import PrivateRoute from "./components/common/PrivateRoute";

// Components
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/singlepost/SinglePost";

import NotFound from "./components/not-found/NotFound";

// Check for token
if (localStorage.jwtToken) {
  // Set Auth Token Header "Authentication"
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration.
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set User and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired Token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logotu user
    store.dispatch(logoutUser());

    // TODO: Clear Current Profile
    store.dispatch(clearCurrentProfile());

    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:handle" component={Profile} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/feed" component={Posts} />
              </Switch>
              <Route exact path="/not-found" component={NotFound} />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
