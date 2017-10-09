import React, { Component } from 'react';
import logo from './logo_signet_300dpi_RGB.png';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FacebookStart from './FacebookStart.js';
import ConcertDetail from './ConcertDetail.js';
import { Button } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to <strong>Ticket By Like</strong></h1>
        </div>

        
        <switch>
          <Route exact path='/' component={FacebookStart}/>
          <Route path='/overview' component={FacebookStart}/>
          {/* both/roster and /roster/:number begin with /roster */}
          <Route exact path='/concert/:name' component={ConcertDetail} />
          </switch>
          {/* <button onClick={this.logout.bind(this)}>Logout</button> */}
      </div>
    );
  }
}

export default App