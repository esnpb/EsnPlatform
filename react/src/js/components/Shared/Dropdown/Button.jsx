import React from 'react';

export default function ButtonDropdownItem(props) {
  const item = props;
  return (
    <li>
      <a href={item.href}>
        <i class="fa fa-fw {item.icon}" />
        {item.title}
      </a>
    </li>
  );
}
