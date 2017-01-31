import React from 'react';
import { filters } from '../constants';

class ListItem extends React.Component {
  render() {
    const {item, markCompleted, deleteItem} = this.props;
    let itemNameTag;

    if(item.status === filters.completed) {
      itemNameTag = (
        <del className="each-item">
          {item.name}
        </del>
      );
    } else {
      itemNameTag = (
        <p className="each-item">
          {item.name}
        </p>
      );
    }

    return (
      <div className="each-list-item">
        <i onClick={ () => markCompleted(item) } className="fa fa-check"></i>
        { itemNameTag }
        <i onClick={ () => deleteItem(item) } className="fa fa-times each-item-cross"></i>
      </div>
    );
  }
}

export default ListItem;
