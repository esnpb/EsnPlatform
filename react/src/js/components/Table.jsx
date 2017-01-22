import React from 'react';

export default function Table(props) {
  return (
    <div></div>
  );
}

Table.propTypes = {
  title: React.PropTypes.string,
  counter: React.PropTypes.number,
  icon: React.PropTypes.string,
};

Table.defaultProps = {
  title: '',
  counter: 0,
  icon: 'comments',
};
