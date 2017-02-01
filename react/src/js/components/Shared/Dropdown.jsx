import React from 'react';
import DropdownItem from './Dropdown/DropdownItem';

export default function Dropdown(props) {
  const itemsList = props.dropItems.map(item =>
    <DropdownItem {...item} />);
  const buttonIconClass = `fa ${props.dropButtonClass} fa-fw`;
  const dropdownIconClass = `dropdown-menu ${props.dropdownClass}`;
  return (
    <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#elo">
        <i class={buttonIconClass} />
        <i class="fa fa-caret-down" />
      </a>
      <ul class={dropdownIconClass}>
        {itemsList}
      </ul>
    </li>
  );
}

Dropdown.propTypes = {
  dropItems: React.PropTypes.arrayOf(React.PropTypes.object),
  dropButtonClass: React.PropTypes.string,
  dropdownClass: React.PropTypes.string,
};

Dropdown.defaultProps = {
  dropItems: null,
  dropButtonClass: '',
  dropdownClass: '',
};
