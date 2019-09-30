import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { initialiseFirebase } from "./firebase";

import "./global.scss";

(async () => {
  // Initialise Firebase
  await initialiseFirebase();

  ReactDOM.render(<App />, document.getElementById("root"));
})();
