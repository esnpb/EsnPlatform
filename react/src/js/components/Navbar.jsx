import React from 'react';
import { Link } from 'react-router';
import Sidebar from './Sidebar';

import UserDropdown from './Navbar/UserDropdown';
import AlertDropdown from './Navbar/AlertDropdown';
import TaskDropdown from './Navbar/TaskDropdown';
import MessageDropdown from './Navbar/MessageDropdown';

export default function Navbar(props) {
  const navStyle = {
    marginBottom: 0,
  };
  return (
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style={navStyle}>
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar" />
          <span class="icon-bar" />
          <span class="icon-bar" />
        </button>
        <Link to="/" class="navbar-brand">ESN Platform by Karol L. - SB Admin v2.0</Link>
      </div>
      <ul class="nav navbar-top-links navbar-right">
        <MessageDropdown />
        <TaskDropdown />
        <AlertDropdown alerts={props.alerts} language={props.language} />
        <UserDropdown />
      </ul>
      <Sidebar menuItemsTree={props.menuItemsTree} language={props.language} />
    </nav>
  );
}

Navbar.propTypes = {
  menuItemsTree: React.PropTypes.arrayOf(React.PropTypes.object),
  language: React.PropTypes.string,
  alerts: React.PropTypes.arrayOf(React.PropTypes.object),
};

Navbar.defaultProps = {
  menuItemsTree: [],
  alerts: [],
  language: 'gb',
};
