import React from 'react';

function intToOrderText(number) {
  switch (number) {
    case 0:
      return 'zero';
    case 1:
      return 'first';
    case 2:
      return 'second';
    case 3:
      return 'third';
    case 4:
      return 'fourth';
    default:
      break;
  }
  return '';
}

export default function SidebarItem(props) {
  const item = props;
  const children = item.items && item.items.length > 0 ? item.items.map(obj =>
    <SidebarItem
      key={obj.key}
      level={obj.level}
      title={obj.title}
      icon={obj.icon}
      href={obj.href}
      items={obj.items}
    />) : [];
  return (
    <li key={item.key}>
      <a href={item.href}>
        { item.icon ? <i class="fa fa-fw {item.icon}" /> : '' }
        {item.title}
        { item.items && item.items.length > 0 ? <span class="fa arrow" /> : '' }
      </a>
      { item.items && item.items.length > 0 ?
        <ul class={`nav nav-${intToOrderText(item.level + 2)}-level`}>
          {children}
        </ul>
      : '' }
    </li>
  );
}
