import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button } from "./components";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/button" component={Button} />
      </Switch>
    </Router>
  );
}

export default App;
