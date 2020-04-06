import React from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import Lumos from "./Pages/Lumos.js";
import D19page from "./Pages/D19page.js";
import "./App.css";
import DayOfTheDead from "./Pages/DayOfTheDead.js";
import Icpu from "./Pages/Icpu.js";
import Waterbug from "./Pages/Waterbug.js";
import { render } from "@testing-library/react";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* only need to use 'exact' on the root url. */}
        <Route path="/" component={Homepage} exact />
        <Route path="/Lumos" component={Lumos} />
        <Route path="/D19" component={D19page} />
        <Route path="/Day Of The Dead" component={DayOfTheDead} />
        <Route
          path="/University of Sydney & Industry experts - Create Space"
          component={Icpu}
        />
        <Route path="/Waterbug" component={Waterbug} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
