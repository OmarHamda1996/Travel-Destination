import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/city/:id" component={TourDetails} />
      </Switch>
    </Router>
  );
};

export default App;
