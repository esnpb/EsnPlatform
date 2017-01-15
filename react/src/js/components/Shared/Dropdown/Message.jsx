import React from 'react';

export default function MessageDropdownItem(props) {
  const item = props;
  return (
    <li>
      <a href={item.href}>
        <div>
          <strong>{item.title}</strong>
          <span class="pull-right text-muted">
            <em>{item.timestamp}</em>
          </span>
        </div>
        <div>{item.text}</div>
      </a>
    </li>
  );
}
