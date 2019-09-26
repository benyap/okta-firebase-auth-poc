import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CallbackPage from "./pages/CallbackPage";

import * as c from "./constants";

import FirebaseLoginState from "./components/FirebaseLoginState";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="menu">
        <Link to="/">Home</Link>
        <FirebaseLoginState />
      </nav>
      <main>
        <h1>Okta x Firebase - Custom Auth Proof of Concept</h1>
        <p className="subtitle">
          Proof of concept for integrating Okta authentication with Firebase.
        </p>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path={c.REDIRECT_URI} component={CallbackPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
