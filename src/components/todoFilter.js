import React from 'react';
import { filters } from '../constants.js';
import { Link } from 'react-router';
import '../assets/css/todoFilter.css';

class TodoFilter extends React.Component {
  constructor(props) {
    super(props);

    this.filterNames = [];

    // create an array of filter names from filters object
    for (let filterName in filters) {
      if(filters.hasOwnProperty(filterName)) {
        this.filterNames.push(filterName);
      }
    }
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  generateFilterLinks() {
    let self = this;
    let links = this.filterNames.map(function(filterName) {
      return (
        <div className="each-filter" key={filterName}>
          <Link activeClassName="active" to={"/" + filterName}>{self.capitalize(filterName)}</Link>
        </div>
      );
    });

    links.unshift(
      <div className="each-filter" key="all" >
        <Link onlyActiveOnIndex={true} activeClassName="active" to="/">All</Link>
      </div>
    );

    return links;
  }

  render() {
    return (
      <div className="todo-filters">
        { this.generateFilterLinks() }
      </div>
    );
  }
}

export default TodoFilter;
