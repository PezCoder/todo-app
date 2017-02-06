import React from 'react';
import '../assets/css/newTodo.css';

class NewTodo extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleCarriageReturn = this.handleCarriageReturn.bind(this);
    this.state = {
      showCarriageReturn: false
    };
  }

  componentDidMount() {
    this.textInput.focus();
  }

  onSubmit(event) {
    this.props.addTodo(this.textInput.value);
    this.textInput.value = '';
    this.setState({
      showCarriageReturn: false
    });

    event.preventDefault();
  }

  handleCarriageReturn() {
    let showCarriageReturn = (this.textInput.value === '') ? false : true;

    this.setState({
      showCarriageReturn
    });
  }

  render() {
    let labelClass = this.state.showCarriageReturn ? 'c-r visible' : 'c-r';

    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input className="new-todo" type="text" required
          ref={(input) => this.textInput = input}
          placeholder="What do you wanna do ?"
          onChange={this.handleCarriageReturn} />
        <label ref={(label) => this.label = label} className={ labelClass }>&lt;CR&gt;</label>
      </form>
    );
  }
}

NewTodo.propTypes = {
  addTodo: React.PropTypes.func
};
export default NewTodo;
