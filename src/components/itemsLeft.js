import React from 'react';

const ItemLeft = (props) => {
  return (
    <span className="active-item-count">{props.count} item{props.count !== 1 ? 's' : ''} left</span>
  );
};

export default ItemLeft;
