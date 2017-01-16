import React from 'react';

export default function ButtonDropdownItem(props) {
  const iconClass = `fa fa-fw ${props.icon}`;
  return (
    <li>
      <a href={props.href}>
        <i class={iconClass} />
        {props.title}
      </a>
    </li>
  );
}
