import React, { useCallback } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import { FirebaseLogoutButtonProps } from "./types";

/**
 * Log out of Firebase.
 */
export const FirebaseLogoutButton: React.FC<FirebaseLogoutButtonProps> = () => {
  const logout = useCallback(() => {
    firebase.auth().signOut();
  }, []);

  return <button onClick={logout}>Log out of Firebase</button>;
};
