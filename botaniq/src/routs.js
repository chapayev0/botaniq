// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Area from './components/Area/Area';
import Details from './components/Detail_page/DetailPage';
import Location from './components/Location/Location';
// import Location from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Area} />
        <Route path="/details" component={Details} />
        <Route path="/location" component={Location} />
        {/* <Route path="/contact" component={Contact} /> */}
      </Switch>
    </Router>
  );
}

export default App;
