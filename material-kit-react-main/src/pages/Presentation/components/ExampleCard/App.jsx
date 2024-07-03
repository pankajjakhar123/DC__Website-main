import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExampleCard from "./ExampleCard";
import NewPage from "./NewPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/new-page/:name" component={NewPage} />
        <Route path="/" component={ExampleCard} />
      </Switch>
    </Router>
  );
}

export default App;
