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

    this.addTodo             = this.addTodo.bind(this);
    this.changeActiveFilter  = this.changeActiveFilter.bind(this);
    this.clearCompletedItems = this.clearCompletedItems.bind(this);
    this.updateTodoWith      = this.updateTodoWith.bind(this);
    this.toggleStatus        = this.toggleStatus.bind(this);
    this.updateTodoText      = this.updateTodoText.bind(this);
  }

  addTodo(name) {
    let todos = this.state.todos;
    let lastTodo = todos[todos.length - 1];
    let nextTodoId = lastTodo.id + 1; // assuming the last todo has the highest id
    let concatTodos = todos.concat({
      id: nextTodoId,
      name,
      status: filters.active
    });
    this.setState({
      todos: concatTodos
    });
  }

  updateTodoWith(todoToUpdate, updatedObject) {
    let todos = this.state.todos;
    let updatedTodos = todos.map(function(eachTodo) {
      if (eachTodo.id === todoToUpdate.id) {
        let updatedTodo = Object.assign({}, todoToUpdate, updatedObject);
        return updatedTodo;
      }

      return eachTodo;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  toggleStatus(todoToMark) {
    var toggledStatus = todoToMark.status === filters.active ? filters.completed : filters.active;
    this.updateTodoWith(todoToMark, {
      'status': toggledStatus
    });
  }

  updateTodoText(todoToUpdate, newText) {
    this.updateTodoWith(todoToUpdate, {
      'name': newText
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
      return eachTodo.status !== filters.completed;
    });

    this.setState({
      'todos': activeTodos
    });
  }

  deleteItem(todoToDelete) {
    let todos = this.state.todos;
    let filteredTodos = todos.filter(function(eachTodo) {
      return eachTodo.id !== todoToDelete.id;
    });

    this.setState({
      'todos': filteredTodos
    });
  }

  render() {
    let todos = this.state.todos;
    let noOfActiveItems = this.calculateNoOfActiveItems(todos);
    let noOfCompletedItems = todos.length - this.calculateNoOfActiveItems(todos);

    return (
      <div>
        <NewTodo addTodo={this.addTodo} />
        <TodoList activeFilter={this.state.activeFilter} toggleStatus={this.toggleStatus}
          deleteItem={this.deleteItem} items={todos} updateTodoText={this.updateTodoText} />
        <ItemsLeft count={noOfActiveItems} />
        <TodoFilter changeActiveFilter={this.changeActiveFilter} activeFilter={this.state.activeFilter} />
        { noOfCompletedItems > 0 && <ClearItems clearCompletedItems={this.clearCompletedItems} /> }
      </div>
    );
  }
}

export default Todo;
