import React from 'react';
import Dropdown from '../Shared/Dropdown';

export default function MessageDropdown() {
  const dropItems = [
    { key: 1, type: 'message', timestamp: Date.now(), title: 'John Smith', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...', href: '#' },
    { key: 2, type: 'divider' },
    { key: 3, type: 'message', timestamp: Date.now(), title: 'John Smith', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...', href: '#' },
    { key: 4, type: 'divider' },
    { key: 5, type: 'message', timestamp: Date.now(), title: 'John Smith', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...', href: '#' },
    { key: 6, type: 'divider' },
    { key: 7, type: 'see-all', title: 'Read All Messages', href: '#' },
  ];
  return (
    <Dropdown dropButtonClass="fa-envelope" dropdownClass="dropdown-messages" dropItems={dropItems} />
  );
}
