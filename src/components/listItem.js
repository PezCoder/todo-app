import React from 'react';

class ListItem extends React.Component {
  render() {
    const {item, markCompleted} = this.props;
    return (
      <div>
        <i onClick={ () => markCompleted(item) } className="fa fa-check"></i>
        <p className="each-item">
          {item.name}
        </p>
      </div>
    );
  }
}

export default ListItem;
