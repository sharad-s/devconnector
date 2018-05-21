import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// jwtToken
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// Actions
import { setCurrentUser } from "./actions/authActions";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { logoutUser } from "./actions/authActions";

// CSS
import "./App.css";

// Components
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

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
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
