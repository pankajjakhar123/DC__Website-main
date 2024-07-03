import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DesignBlocks1 from './DesignBlocks1';
import A from "./A";

// function Hello() {
//   return (
//     <div>
//       {/* You can add any other React components here */}
//       <iframe src="/Hello.html" width="100%" height="700" title="Hello HTML"></iframe>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DesignBlocks1} />
        <Route path="/hello" component={A} /> {/* Define a route for the HelloPage component */}
      </Switch>
    </Router>
  );
}

export default App;
