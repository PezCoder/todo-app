import React from 'react';
import TodoList from './todoList';
import NewTodo from './newTodo';
import TodoFilter from './todoFilter';
import ItemsLeft from './itemsLeft';
import ClearItems from './clearItems';
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
    this.clearCompletedItems = this.clearCompletedItems.bind(this);
  }

  addTodo(name) {
    let todos = this.state.todos;
    let concatTodos = todos.concat({
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

  calculateNoOfActiveItems(todos) {
    return todos.reduce(function(totalCount, todo) {
      if(todo.status === filters.active) {
        totalCount ++;
      }

      return totalCount;
    }, 0);
  }

  clearCompletedItems() {
    let todos = this.state.todos;
    let activeTodos = todos.filter(function(eachTodo) {
      if(eachTodo.status !== filters.completed) {
        return true;
      }
    });

    this.setState({
      'todos': activeTodos
    });
  }

  render() {
    let todos = this.state.todos;
    let noOfActiveItems = this.calculateNoOfActiveItems(todos);
    let noOfCompletedItems = todos.length - this.calculateNoOfActiveItems(todos);

    return (
      <div>
        <NewTodo addTodo={this.addTodo} />
        <TodoList activeFilter={this.state.activeFilter} markCompleted={this.markCompleted} items={todos} />
        <ItemsLeft count={noOfActiveItems} />
        <TodoFilter changeActiveFilter={this.changeActiveFilter} activeFilter={this.state.activeFilter} />
        { noOfCompletedItems > 0 && <ClearItems clearCompletedItems={this.clearCompletedItems} /> }
      </div>
    );
  }
}

export default Todo;
