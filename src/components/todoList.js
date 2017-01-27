import React from 'react';
import ListItem from './listItem';
import { filters } from '../constants.js';

class TodoList extends React.Component {
  render() {
    let { items, markCompleted, activeFilter } = this.props;
    let filteredItems = items.filter(function(eachTodo) {
      return eachTodo.status === activeFilter;
    });
    let itemsToRender = activeFilter === filters.all ? items : filteredItems;

    return (
      <div className="all-items">
        {itemsToRender.map((item) => <ListItem markCompleted={ markCompleted } item={item} key={item.id} />)}
      </div>
    );
  }
}

export default TodoList;
