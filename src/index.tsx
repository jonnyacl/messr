import React from "react";
import ReactDOM from "react-dom";

import Me from "./pages/Me";

ReactDOM.hydrate(
  <React.StrictMode>
    <Me />
  </React.StrictMode>,
  document.getElementById("app")
);
