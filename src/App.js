import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Header />
            <h1>login</h1>
          </Route>
          {/* Default root */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

        {/* We need react-router */}

        {/* localhost.com */}
        {/* localhost.com/checkout */}
        {/* localhost.com/login */}

      </div>
    </Router>
  );
}

export default App;
