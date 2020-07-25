import React, { Component, Children } from 'react';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';
import {Link, Route, HashRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home}/>
          <Route path="/details/:id" component={Details}/>
        </Router>
      </div>
    );
  }
}

export default App;
