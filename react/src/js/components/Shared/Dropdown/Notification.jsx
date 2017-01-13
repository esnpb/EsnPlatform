import React from 'react';

export default class NotificationDropdownItem extends React.Component {
  render() {
    const item = this.props;
    return (
      <li>
        <a href={item.href}>
          <div>
            <i class={'fa fa-fw ' + item.icon} />
            {item.title}
            <span class="pull-right text-muted small">{item.timestamp}</span>
          </div>
        </a>
      </li>
    );
  }
}
