import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from '../img/logo.svg';
import Home from './home';
import Options from './puzzle_config';
import Puzzle from './puzzle';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sudoku</h1>
        </div>
        <div className="main-body">
          <BrowserRouter>
            <Switch>
              <Route path='/options' component={Options} />
              <Route path='/puzzle' component={Puzzle} />
              <Route path='/' component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
        <footer>
          <span>G</span>od<span>B</span>less<span>U</span> Web Services &copy; 2018
        </footer>
      </div>
    );
  }
}

export default App;
