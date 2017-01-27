import React from 'react';
import { filters } from '../constants.js';

class TodoFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'activeFilter': props.activeFilter
    };
    this.onChange = this.onChange.bind(this);
    this.filterNames = [];

    for (let filterName in filters) {
      if(filters.hasOwnProperty(filterName)) {
        this.filterNames.push(filterName);
      }
    }
  }

  onChange(event) {
    let { changeActiveFilter } = this.props;
    let activeFilter = event.target.value;

    this.setState({
      'activeFilter': activeFilter
    });
    changeActiveFilter(activeFilter);
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getRadioButtons() {
    let { activeFilter } = this.state;
    let self = this;
    let radioButtons = this.filterNames.map(function(filterName) {
      return (
        <div className="each-filter" key={filterName}>
          <input id={filterName} type="radio" name="todo-filter" value={filterName} checked={filterName === activeFilter} onChange={self.onChange} />
          <label htmlFor={ filterName }>{self.capitalize(filterName)}</label>
        </div>
      );
    });

    return radioButtons;
  }

  render() {
    return (
      <div className="todo-filters">
        { this.getRadioButtons() }
      </div>
    );
  }
}

export default TodoFilter;
