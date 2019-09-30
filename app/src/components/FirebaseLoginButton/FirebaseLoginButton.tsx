import React, { useCallback } from "react";
import decode from "jwt-decode";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import * as c from "../../constants";

import { FirebaseLoginButtonProps } from "./types";

const TIME_OUT = 60;

/**
 * This button logs the user into Firebase with the Okta token.
 */
export const FirebaseLoginButton: React.FC<FirebaseLoginButtonProps> = ({
  token
}) => {
  const login = useCallback(() => {
    const decoded = decode<{
      iss: string;
      iat: number;
      exp: number;
    }>(token);
    // Verify issuer
    if (decoded.iss !== `${c.OKTA_URL}/oauth2/${c.AUTH_SERVER}`) {
      console.error("Invalid issuer");
      return;
    }

    // Check expiry and iat
    if (decoded.exp * 1000 < Date.now()) {
      console.error("Token expired");
      return;
    }
    if (
      Date.now() < decoded.iat ||
      Date.now() > (decoded.iat + TIME_OUT) * 1000
    ) {
      console.error("Token too old");
      return;
    }

    // Debugging
    console.log("Logging in with Firebase...");

    // Call the cloud function that will return a Firebase auth token
    // if the provided Okta token is authenticated.
    firebase
      .functions()
      .httpsCallable("authenticate")({ token })
      .then(({ data }) => {
        firebase.auth().signInWithCustomToken(data);
        console.log("Logged in");
      })
      .catch(console.error);
  }, [token]);

  return <button onClick={login}>Log in to Firebase</button>;
};
