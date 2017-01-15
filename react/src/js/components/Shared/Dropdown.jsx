import React from 'react';
import DropdownItem from './Dropdown/DropdownItem';

export default function Dropdown(props) {
  const dropdown = props;
  const itemsList = dropdown.dropItems.map(item =>
    <DropdownItem
      key={item.key}
      type={item.type}
      title={item.title}
      text={item.text}
      href={item.href}
      icon={item.icon}
      timestamp={item.timestamp}
      progress={item.progress}
    />);
  return (
    <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#elo">
        <i class="fa {dropdown.dropButtonClass} fa-fw" />
        <i class="fa fa-caret-down" />
      </a>
      <ul class="dropdown-menu {dropdown.dropdownClass}">
        {itemsList}
      </ul>
    </li>
  );
}
