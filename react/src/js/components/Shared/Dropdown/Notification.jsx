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
