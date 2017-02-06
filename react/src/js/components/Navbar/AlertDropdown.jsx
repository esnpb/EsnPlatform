import React from 'react';
import Dropdown from '../Shared/Dropdown';

export default function AlertDropdown(props) {
  return (
    <Dropdown
      dropButtonClass="fa-bell"
      dropdownClass="dropdown-alerts"
      dropItems={props.alerts}
      language={props.language}
    />
  );
}

AlertDropdown.propTypes = {
  language: React.PropTypes.string,
  alerts: React.PropTypes.arrayOf(React.PropTypes.object),
};

AlertDropdown.defaultProps = {
  alerts: [],
  language: 'gb',
};
