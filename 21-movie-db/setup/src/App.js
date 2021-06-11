import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movies/:id" component={Movie} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
