import React from 'react';
import TodoList from './todoList';
import NewTodo from './newTodo';
import { todoStatus } from '../constants.js';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'todos': [
        { id: 1, name: 'Get groceries',   status: todoStatus.active},
        { id: 2, name: 'Bhalu ko khilao', status: todoStatus.active}
      ]
    };

    this.addTodo = this.addTodo.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
  }

  addTodo(name) {
    var todos = this.state.todos;
    var concatTodos = todos.concat({
      id: todos.length + 1,
      name,
      status: todoStatus.active
    });
    this.setState({
      todos: concatTodos
    });
  }

  markCompleted(todoToMark) {
    let todos = this.state.todos;
    todos.map(function(eachTodo) {
      if (eachTodo.id === todoToMark.id) {
        todoToMark.status = todoStatus.completed;
        return todoToMark;
      }
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div>
        <NewTodo addTodo={this.addTodo} />
        <TodoList filterType="ACTIVE" markCompleted={this.markCompleted} items={this.state.todos} />
      </div>
    );
  }
}

export default Todo;
