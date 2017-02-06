import React from 'react';
import { filters } from '../constants';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.makeTheFieldEditable = this.makeTheFieldEditable.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  makeTheFieldEditable() {
    this.setState({
      isEditing: true
    }, function fieldMounted() {
      this.editInput.focus();
    });
  }

  onSubmitHandler(event, item) {
    this.props.updateTodoText(item, this.editInput.value);
    this.setState({
      'isEditing': false
    });

    event.preventDefault();
  }

  render() {
    const {item, toggleStatus, deleteItem} = this.props,
      isEditing = this.state.isEditing;
    let itemNameTag;
    let itemEditTag = (
      <form className="each-item" onSubmit={(event) => this.onSubmitHandler(event, item)}>
        <input type="text" ref={(editInput) => this.editInput = editInput} required />
      </form>
    );

    // strikeout text for completed
    if(item.status === filters.completed) {
      itemNameTag = (
        <del className="each-item" onDoubleClick={this.makeTheFieldEditable}>
          {item.name}
        </del>
      );
    } else {
    // normal text for active
      itemNameTag = (
        <p className="each-item" onDoubleClick={this.makeTheFieldEditable}>
          {item.name}
        </p>
      );
    }

    let itemClassName = (item.status === filters.completed) ? 'fa fa-check' : 'fa fa-circle-o';

    return (
      <div className="each-list-item">
        <i onClick={ () => toggleStatus(item) } className={itemClassName}></i>
        { isEditing ? itemEditTag : itemNameTag }
        <i onClick={ () => deleteItem(item) } className="fa fa-times each-item-cross"></i>
      </div>
    );
  }
}

ListItem.propTypes = {
  item           : React.PropTypes.object,
  toggleStatus   : React.PropTypes.func,
  deleteItem     : React.PropTypes.func,
  updateTodoText : React.PropTypes.func
};

export default ListItem;
