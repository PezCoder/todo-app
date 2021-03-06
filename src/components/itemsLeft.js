import React from 'react';
import '../assets/css/itemsLeft.css';

const ItemLeft = (props) => {
  return (
    <span className="active-item-count">{props.count} item{props.count !== 1 ? 's' : ''} left</span>
  );
};

ItemLeft.propTypes = {
  count: React.PropTypes.number
};

export default ItemLeft;
