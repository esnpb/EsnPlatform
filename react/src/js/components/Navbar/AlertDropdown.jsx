import React from 'react';
import Dropdown from '../Shared/Dropdown';

export default function AlertDropdown() {
  const dropItems = [
    { key: 1, type: 'notification', title: 'New Comment', timestamp: Date.now(), icon: 'fa-comment', href: '#' },
    { key: 2, type: 'divider' },
    { key: 3, type: 'notification', title: '3 New Followers', timestamp: Date.now(), icon: 'fa-twitter', href: '#' },
    { key: 4, type: 'divider' },
    { key: 5, type: 'notification', title: 'Message Sent', timestamp: Date.now(), icon: 'fa-envelope', href: '#' },
    { key: 6, type: 'divider' },
    { key: 7, type: 'notification', title: 'New Task', timestamp: Date.now(), icon: 'fa-tasks', href: '#' },
    { key: 8, type: 'divider' },
    { key: 9, type: 'notification', title: 'Server Rebooted', timestamp: Date.now(), icon: 'fa-upload', href: '#' },
    { key: 10, type: 'divider' },
    { key: 11, type: 'see-all', title: 'See All Alerts', href: '#' },
  ];
  return (
    <Dropdown dropButtonClass="fa-bell" dropdownClass="dropdown-alerts" dropItems={dropItems} />
  );
}
