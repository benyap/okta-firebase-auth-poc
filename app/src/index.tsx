import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { initialiseFirebase } from "./firebase";

import "./global.scss";

// Initialise Firebase
initialiseFirebase();

ReactDOM.render(<App />, document.getElementById("root"));
