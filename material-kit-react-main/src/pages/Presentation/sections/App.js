// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DesignBlocks from './DesignBlocks'; // Import your main component
import HeaderOne from 'layouts/sections/page-sections/page-headers/components/HeaderOne'; // Import HeaderOne component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sections/page-sections/page-headers" component={HeaderOne} />
        <Route path="/" component={DesignBlocks} />
      </Switch>
    </Router>
  );
}

export default App;
