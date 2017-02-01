import React from 'react';
import SidebarItem from './Sidebar/SidebarItem';
import SidebarSearchItem from './Sidebar/SidebarSearchItem';
import MenuItemTree from './Sidebar/MenuItemTree';

export default function Sidebar() {
  const sidebarItemTree =
    MenuItemTree && MenuItemTree.length > 0 ?
      MenuItemTree.map(item => <SidebarItem {...item} />) :
      [];
  return (
    <div class="navbar-default sidebar" role="navigation">
      <div class="sidebar-nav navbar-collapse">
        <ul class="nav" id="side-menu">
          <SidebarSearchItem />
          {sidebarItemTree}
        </ul>
      </div>
    </div>
  );
}
