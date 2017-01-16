import React from 'react';
import timeago from 'timeago-words';

export default function MessageDropdownItem(props) {
  return (
    <li>
      <a href={props.href}>
        <div>
          <strong>{props.title}</strong>
          <span class="pull-right text-muted">
            <em>{timeago(new Date(props.timestamp), { language: 'pl' })}</em>
          </span>
        </div>
        <div>{props.text}</div>
      </a>
    </li>
  );
}
