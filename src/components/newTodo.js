import React from 'react';

class NewTodo extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    console.log(this.textInput);
    this.props.addTodo(this.textInput.value);
    this.textInput.value = '';

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" required ref={(input) => this.textInput = input} />
      </form>
    );
  }
}

NewTodo.propTypes = {
  addTodo: React.PropTypes.func
};
export default NewTodo;
