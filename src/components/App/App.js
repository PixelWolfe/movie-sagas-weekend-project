import React, {Component} from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';
import {Route, HashRouter as Router} from 'react-router-dom';
import {Grid} from '@material-ui/core';


class App extends Component {

  render() {
    const mainStyle={
      background: 'slategrey'
    }
    const viewHeight={
      height: '100vh',
      background: 'slategrey'
    }
    return (
      //create a grid column
      <div style={viewHeight}>
        <Grid container direction="column">
          <Grid item style={mainStyle}>
            <Header/>
          </Grid>
            <Grid item container>
              <Grid item xs={0} xs={1}/>
              <Grid item xs={12} sm={10} >
                <Grid container justify='center' style={mainStyle}>
                  <Router>
                    <Route exact path="/" component={Home}/>
                    <Route path="/details/:id" component={Details}/>
                    <Route path="/edit/:id" component={Edit}/>
                  </Router>
                </Grid>
              </Grid>
              <Grid item xs={0} xs={1}/>
          </Grid>
        </Grid>
      </div>
     
    );
  }
}

export default App;
