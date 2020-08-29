import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";


function App() {

  const [{ user }, dispatch] = useStateValue();

  // piece of code which runs based on condition
  // useEffect
  useEffect(() => {
    const unsubsrcibe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
    return () => {
      // any cleanup operation
      unsubsrcibe();
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />

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
