import React from 'react';
import UserDropdown from './UserDropdown';
import AlertDropdown from './AlertDropdown';
import TaskDropdown from './TaskDropdown';
import MessageDropdown from './MessageDropdown';

export default function NavbarDropdowns() {
  return (
    <ul class="nav navbar-top-links navbar-right">
      <MessageDropdown />
      <TaskDropdown />
      <AlertDropdown />
      <UserDropdown />
    </ul>
  );
}
