import React from 'react';
import ListItem from './listItem';

class TodoList extends React.Component {
  render() {
    let { items, toggleStatus, filterType, deleteItem, updateTodoText } = this.props;
    let filteredItems = items.filter(function(eachTodo) {
      return eachTodo.status === filterType;
    });
    let itemsToRender = filterType ? filteredItems : items;

    return (
      <div className="all-items">
        {itemsToRender.map((item) => <ListItem toggleStatus={ toggleStatus } deleteItem={ deleteItem } item={item} key={item.id} updateTodoText={updateTodoText} />)}
      </div>
    );
  }
}

export default TodoList;
