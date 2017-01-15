import React from 'react';

export default function SeeAllDropdownItem(props) {
  const item = props;
  return (
    <li>
      <a class="text-center" href={item.href}>
        <strong>{item.title}</strong>
        <i class="fa fa-angle-right" />
      </a>
    </li>
  );
}
