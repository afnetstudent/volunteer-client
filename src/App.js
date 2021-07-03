import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvents from './components/AddEvents/AddEvents';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/addEvents">Add Event</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/addEvents">
            <AddEvents />
          </Route>
          <Route path="/dashboard">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
