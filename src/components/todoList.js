import React from 'react';
import ListItem from './listItem';

class TodoList extends React.Component {
  render() {
    let items = this.props.items;
    return (
      <div className="all-items">
        {items.map((item) => <ListItem item={item} key={item.id} />)}
      </div>
    );
  }
}

export default TodoList;
