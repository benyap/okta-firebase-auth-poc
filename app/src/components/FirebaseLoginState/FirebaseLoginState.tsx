import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import { Circle } from "./Circle";

import "./style.scss";

/**
 * WIP: This component should indicate the state (logged in/logged out)
 * of the Firebase Auth client.
 *
 * TODO: not implemented yet.
 */
export const FirebaseLoginState: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(userInfo => {
      setAuthenticated(Boolean(userInfo));
    });
  }, [setAuthenticated]);

  return (
    <div className="firebase-state">
      <Circle className="circle" color={authenticated ? "lightgreen" : "red"} />
      <span>Firebase Auth</span>
    </div>
  );
};
