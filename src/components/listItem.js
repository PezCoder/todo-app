import React from 'react';

class ListItem extends React.Component {
  render() {
    const {name} = this.props.item;
    return (
      <p className="each-item">
        {name}
      </p>
    );
  }
}

export default ListItem;
