import React, { useCallback } from "react";
import firebase from "firebase/app";
import "firebase/functions";

import { FirebaseLoginButtonProps } from "./types";

/**
 * This button logs the user into Firebase with the Okta token.
 */
export const FirebaseLoginButton: React.FC<FirebaseLoginButtonProps> = ({
  token
}) => {
  const login = useCallback(() => {
    // Debugging
    console.log("Logging in with Firebase...");

    // Call the cloud function that will return a Firebase auth token
    // if the provided Okta token is authenticated.
    firebase
      .functions()
      .httpsCallable("authenticate")({ token })
      .then(console.log)
      .catch(console.error);
  }, [token]);

  return <button onClick={login}>Log in to Firebase</button>;
};