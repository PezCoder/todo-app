import React from 'react';
import ListItem from './listItem';
import { filters } from '../constants.js';

class TodoList extends React.Component {
  render() {
    let { items, toggleStatus, activeFilter, deleteItem, updateTodoText } = this.props;
    let filteredItems = items.filter(function(eachTodo) {
      return eachTodo.status === activeFilter;
    });
    let itemsToRender = activeFilter === filters.all ? items : filteredItems;

    return (
      <div className="all-items">
        {itemsToRender.map((item) => <ListItem toggleStatus={ toggleStatus } deleteItem={ deleteItem } item={item} key={item.id} updateTodoText={updateTodoText} />)}
      </div>
    );
  }
}

export default TodoList;
