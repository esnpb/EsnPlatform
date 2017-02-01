import React from 'react';

export default function ButtonDropdownItem(props) {
  const iconClass = `fa fa-fw ${props.icon}`;
  return (
    <li>
      <a href={props.href}>
        <i class={iconClass} />
        {props.title}
      </a>
    </li>
  );
}

ButtonDropdownItem.propTypes = {
  icon: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
};

ButtonDropdownItem.defaultProps = {
  icon: '',
};
