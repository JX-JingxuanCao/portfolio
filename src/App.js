import React from "react";
import { BrowserRouter, Route, Router, Link, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import "./App.css";
import Lumos from "./Pages/Lumos.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* only need to use 'exact' on the root url. */}
        <Route path="/" component={Homepage} exact />
        <Route path="/Lumos" component={Lumos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
