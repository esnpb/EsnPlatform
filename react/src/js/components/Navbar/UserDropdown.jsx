import React from 'react';
import Dropdown from '../Shared/Dropdown';

export default function UserDropdown() {
  const dropItems = [
    { key: 1, type: 'button', title: 'User Profile', icon: 'fa-user', href: '#' },
    { key: 2, type: 'button', title: 'Settings', icon: 'fa-gear', href: '#' },
    { key: 3, type: 'divider' },
    { key: 4, type: 'button', title: 'Logout', icon: 'fa-sign-out', href: 'login.html' },
  ];
  return (
    <Dropdown
      dropButtonClass="fa-user"
      dropdownClass="dropdown-user"
      dropItems={dropItems}
    />
  );
}
