import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Players from "./Players";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/players" component={Players} />
      </Switch>
    </div>
  );
}
