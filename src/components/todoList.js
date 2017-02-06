import React from 'react';
import ListItem from './listItem';

class TodoList extends React.Component {
  render() {
    let { items, filterType } = this.props;
    let filteredItems = items.filter(function(eachTodo) {
      return eachTodo.status === filterType;
    });
    let itemsToRender = filterType ? filteredItems : items;

    return (
      <div className="all-items">
        {itemsToRender.map((item) => <ListItem item={item} key={item.id} {...this.props} />)}
      </div>
    );
  }
}

TodoList.propTypes = {
  items          : React.PropTypes.array,
  toggleStatus   : React.PropTypes.func,
  filterType     : React.PropTypes.string,
  deleteItem     : React.PropTypes.func,
  updateTodoText : React.PropTypes.func
};

export default TodoList;
