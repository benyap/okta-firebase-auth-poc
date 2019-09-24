import React from "react";

import { Circle } from "./Circle";

import "./style.scss";

/**
 * WIP: This component should indicate the state (logged in/logged out)
 * of the Firebase Auth client.
 *
 * TODO: not implemented yet.
 */
export const FirebaseLoginState: React.FC = () => {
  return (
    <div className="firebase-state">
      <Circle className="circle" color="red" />
      <span>Firebase Auth</span>
    </div>
  );
};
