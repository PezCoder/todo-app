import React from 'react';
import TodoList from './todoList';
import NewTodo from './newTodo';
import TodoFilter from './todoFilter';
import { filters } from '../constants.js';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'todos': [
        { id: 1, name: 'Get groceries',   status: filters.active},
        { id: 2, name: 'Bhalu ko khilao', status: filters.active}
      ],
      'activeFilter': 'all'
    };

    this.addTodo = this.addTodo.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.changeActiveFilter = this.changeActiveFilter.bind(this);
  }

  addTodo(name) {
    var todos = this.state.todos;
    var concatTodos = todos.concat({
      id: todos.length + 1,
      name,
      status: filters.active
    });
    this.setState({
      todos: concatTodos
    });
  }

  markCompleted(todoToMark) {
    let todos = this.state.todos;
    todos.map(function(eachTodo) {
      if (eachTodo.id === todoToMark.id) {
        todoToMark.status = filters.completed;
        return todoToMark;
      }
    });

    this.setState({
      todos
    });
  }

  changeActiveFilter(activeFilter) {
    this.setState({
      'activeFilter': activeFilter
    });
  }

  render() {
    return (
      <div>
        <NewTodo addTodo={this.addTodo} />
        <TodoList activeFilter={this.state.activeFilter} markCompleted={this.markCompleted} items={this.state.todos} />
        <TodoFilter changeActiveFilter={this.changeActiveFilter} activeFilter={this.state.activeFilter} />
      </div>
    );
  }
}

export default Todo;
