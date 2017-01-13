import React from 'react';
import SidebarItem from './Sidebar/SidebarItem';
import SidebarSearchItem from './Sidebar/SidebarSearchItem';
import MenuItemTree from './Sidebar/MenuItemTree';

export default class Sidebar extends React.Component {
  render() {
    const itemsTree = MenuItemTree;

    const sidebarItemTree = itemsTree && itemsTree.length > 0 ? itemsTree.map(item =>
      <SidebarItem
        key={item.key}
        level={item.level}
        title={item.title}
        icon={item.icon}
        href={item.href}
        items={item.items} />)
      : [];

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
}
