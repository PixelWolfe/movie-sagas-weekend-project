import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';
import {Link, Route, HashRouter as Router} from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home}/>
          <Route path="/details" component={Details}/>
        </Router>
      </div>
    );
  }
}

export default App;
