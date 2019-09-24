import React, { useCallback } from "react";
import firebase from "firebase/app";
import "firebase/functions";

import { FirebaseLoginButtonProps } from "./types";

export const FirebaseLoginButton: React.FC<FirebaseLoginButtonProps> = ({
  token
}) => {
  const login = useCallback(() => {
    console.log("Logging in with Firebase...");
    const fn = firebase.functions();
    fn.httpsCallable("authenticate")({ token })
      .then(console.log)
      .catch(console.error);
  }, [token]);
  return <button onClick={login}>Log in to Firebase</button>;
};
