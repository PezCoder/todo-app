import React from 'react';
import '../assets/css/clearItems.css';

const ClearItems = (props) => {
  return (
    <span className="clear-items" onClick={props.clearCompletedItems}>Clear completed</span>
  );
};

ClearItems.propTypes = {
  clearCompletedItems: React.PropTypes.func
};

export default ClearItems;
