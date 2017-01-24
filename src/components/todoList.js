import React from 'react';
import ListItem from './listItem';

class TodoList extends React.Component {
  render() {
    let { items, markCompleted, filterType } = this.props;
    let filteredItems = items.filter(function(eachTodo) {
      return eachTodo.status === filterType;
    });
    return (
      <div className="all-items">
        {filteredItems.map((item) => <ListItem markCompleted={ markCompleted } item={item} key={item.id} />)}
      </div>
    );
  }
}

export default TodoList;
