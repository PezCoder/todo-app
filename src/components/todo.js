import React from 'react';
import TodoList from './todoList';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'todos': [
        { id: 1, name: 'Get groceries' },
        { id: 2, name: 'Bhalu ko khilao' }
      ]
    };
  }
  render() {
    return (
      <TodoList items={this.state.todos} />
    );
  }
}

export default Todo;
