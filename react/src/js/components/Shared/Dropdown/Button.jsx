import React from 'react';

export default class ButtonDropdownItem extends React.Component {
  render() {
    const item = this.props;
    return (
      <li>
        <a href={item.href}>
          <i class={'fa fa-fw ' + item.icon} />
          {item.title}
        </a>
      </li>
    );
  }
}
