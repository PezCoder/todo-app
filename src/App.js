import React, { Component } from 'react';
import Todo from './components/todo';
import TodoFilter from './components/todoFilter';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './assets/font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Todo}>
          <IndexRoute component={TodoFilter} />

          <Route path="/:filterType" component={TodoFilter} />
        </Route>
      </Router>
    );
  }
}

export default App;
