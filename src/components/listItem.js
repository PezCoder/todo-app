import React from 'react';
import { filters } from '../constants';

class ListItem extends React.Component {
  render() {
    const {item, markCompleted} = this.props;
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
      <div>
        <i onClick={ () => markCompleted(item) } className="fa fa-check"></i>
        { itemNameTag }
      </div>
    );
  }
}

export default ListItem;
