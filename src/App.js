import React, { Component } from 'react';
import Todo from './components/todo';
import TodoFilter from './components/todoFilter';
import { Router, Route, browserHistory } from 'react-router';
import './assets/font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Todo}>
          <Route path="/:filterType" component={TodoFilter} />
        </Route>
      </Router>
    );
  }
}

export default App;
