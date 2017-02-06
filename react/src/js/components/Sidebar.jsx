import React from 'react';
import SidebarItem from './Sidebar/SidebarItem';
import SidebarSearchItem from './Sidebar/SidebarSearchItem';

export default function Sidebar(props) {
  const sidebarItemTree =
    props.menuItemsTree && props.menuItemsTree.length > 0 ?
      props.menuItemsTree.map(item => <SidebarItem {...item} language={props.language} />) :
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

Sidebar.propTypes = {
  menuItemsTree: React.PropTypes.arrayOf(React.PropTypes.object),
  language: React.PropTypes.string,
};

Sidebar.defaultProps = {
  menuItemsTree: {},
  language: 'gb',
};
