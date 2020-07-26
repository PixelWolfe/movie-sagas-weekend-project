import React, { Component, Children } from 'react';
import './App.css';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Details from '../Details/Details';
import {Link, Route, HashRouter as Router} from 'react-router-dom';
import {Grid, jssPreset} from '@material-ui/core';


class App extends Component {
  render() {
    const mainStyle={
      background: 'slategrey'
    }
    const secondaryStyle={
      background: 'darkslategrey'
    }
    return (
      //create a grid column
      <Grid container direction="column" >
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
                    </Router>
              
            </Grid>
           
             

          </Grid>
          <Grid item xs={0} xs={1}/>
        </Grid>
       



      </Grid>
     
    );
  }
}

export default App;
