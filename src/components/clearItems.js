import React from 'react';

const ClearItems = (props) => {
  return (
    <span className="clear-items" onClick={props.clearCompletedItems}>Clear completed</span>
  );
};

export default ClearItems;
