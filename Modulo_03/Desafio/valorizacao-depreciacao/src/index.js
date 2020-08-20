import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Router>
      <Switch>
        <Route path="/" component={App}></Route>
      </Switch>
    </Router> */}
  </React.StrictMode>,
  document.getElementById("root")
);
