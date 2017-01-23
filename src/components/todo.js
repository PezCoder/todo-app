import React from 'react';
import TodoList from './todoList';
import NewTodo from './newTodo';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'todos': [
        { id: 1, name: 'Get groceries' },
        { id: 2, name: 'Bhalu ko khilao' }
      ]
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(name) {
    var todos = this.state.todos;
    var concatTodos = todos.concat({
      id: todos.length + 1,
      name
    });
    this.setState({
      todos: concatTodos
    });
  }

  render() {
    return (
      <div>
        <NewTodo addTodo={this.addTodo} />
        <TodoList items={this.state.todos} />
      </div>
    );
  }
}

export default Todo;
