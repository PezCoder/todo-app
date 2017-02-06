import React from 'react';

const ClearItems = (props) => {
  return (
    <span className="clear-items" onClick={props.clearCompletedItems}>Clear completed</span>
  );
};

ClearItems.propTypes = {
  clearCompletedItems: React.PropTypes.func
};

export default ClearItems;
