import React from 'react';
import Dropdown from '../Shared/Dropdown';

export default class TaskDropdown extends React.Component {
  render() {
    const dropItems = [
      { key: 1, type: 'progressbar', title: 'Task 1', href: '#', progress: { val: 40, minval: 0, maxval: 100, type: 'success' } },
      { key: 2, type: 'divider' },
      { key: 3, type: 'progressbar', title: 'Task 2', href: '#', progress: { val: 20, minval: 0, maxval: 100, type: 'info' } },
      { key: 4, type: 'divider' },
      { key: 5, type: 'progressbar', title: 'Task 3', href: '#', progress: { val: 60, minval: 0, maxval: 100, type: 'warning' } },
      { key: 6, type: 'divider' },
      { key: 7, type: 'progressbar', title: 'Task 4', href: '#', progress: { val: 80, minval: 0, maxval: 100, type: 'danger' } },
      { key: 8, type: 'divider' },
      { key: 9, type: 'see-all', title: 'See All Tasks', href: '#' },
    ];

    return (
      <Dropdown dropButtonClass="fa-tasks" dropdownClass="dropdown-tasks" dropItems={dropItems} />
    );
  }
}
