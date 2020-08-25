import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>checkout</h1>
          </Route>
          <Route path="/login">
            <Header />
            <h1>login</h1>
          </Route>
          {/* Default root */}
          <Route path="/">
            <Header />
            <h1>Home</h1>
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
