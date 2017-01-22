import React from 'react';
import MiniDropdownMenu from '../MiniDropdownMenu';

export default function PanelHeader(props) {
  const iconClass = `fa ${props.icon.startsWith('fa-') ? props.icon : `fa-${props.icon.length > 0 ? props.icon : ''}`} fa-fw`;
  const menuButton = props.menuItems && props.menuItems.length > 0 ?
    <MiniDropdownMenu items={props.menuItems} title={props.menuTitle} /> :
    null;

  return (
    <div class="panel-heading">
      <i class={iconClass} />
      {props.title}
      {props.children}
      {menuButton}
    </div>
  );
}

PanelHeader.propTypes = {
  // your propTypes here
  icon: React.PropTypes.string,
  menuItems: React.PropTypes.arrayOf(React.PropTypes.object),
  menuTitle: React.PropTypes.string,
  title: React.PropTypes.string,
  children: React.PropTypes.node,
};

PanelHeader.defaultProps = {
  icon: '',
  menuItems: [],
  menuTitle: '',
  title: '',
  children: null,
};
