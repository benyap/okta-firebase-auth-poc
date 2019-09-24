import React from "react";

import { Circle } from "./Circle";

import "./style.scss";

export const FirebaseLoginState: React.FC = () => {
  return (
    <div className="firebase-state">
      <Circle className="circle" color="red" />
      <span>Firebase Auth</span>
    </div>
  );
};
