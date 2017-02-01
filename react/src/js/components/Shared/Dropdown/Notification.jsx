import React from 'react';
import timeago from 'timeago-words';

export default function NotificationDropdownItem(props) {
  const iconClass = `fa fa-fw ${props.icon}`;
  return (
    <li>
      <a href={props.href}>
        <div>
          <i class={iconClass} />
          {props.title}
          <span class="pull-right text-muted small">
            {timeago(new Date(props.timestamp))}
          </span>
        </div>
      </a>
    </li>
  );
}

NotificationDropdownItem.propTypes = {
  timestamp: React.PropTypes.number.isRequired,
  icon: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
};

NotificationDropdownItem.defaultProps = {
  icon: '',
};
