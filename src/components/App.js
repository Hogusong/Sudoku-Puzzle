import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './header';
import Home from './home';
import Options from './puzzle_config';
import Puzzle from './puzzle';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
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
