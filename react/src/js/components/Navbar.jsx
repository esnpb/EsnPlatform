import React from 'react';
import { Link } from 'react-router';
import Sidebar from './Sidebar';
import NavbarDropdowns from './Navbar/NavbarDropdowns';

export default function Navbar() {
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
      <NavbarDropdowns />
      <Sidebar />
    </nav>
  );
}
