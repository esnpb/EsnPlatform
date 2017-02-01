import React from 'react';
import { Link } from 'react-router';

function intToOrdinalText(number) {
  switch (number) {
    case 0:
      return 'zero';
    case 1:
      return 'first';
    case 2:
      return 'second';
    case 3:
      return 'third';
    case 4:
      return 'fourth';
    default:
      break;
  }
  return '';
}

export default function SidebarItem(props) {
  const children = props.items && props.items.length > 0 ? props.items.map(obj =>
    <SidebarItem {...obj} />) : [];
  const iconClass = `fa fa-fw ${props.icon}`;
  const levelClass = `nav nav-${intToOrdinalText(props.level + 2)}-level`;
  return (
    <li>
      <Link href={props.href} activeClassName="active">
        { props.icon ? <i class={iconClass} /> : '' }
        {props.title}
        { props.items && props.items.length > 0 ? <span class="fa arrow" /> : '' }
      </Link>
      { props.items && props.items.length > 0 ?
        <ul class={levelClass}>
          {children}
        </ul>
      : '' }
    </li>
  );
}

SidebarItem.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object),
  icon: React.PropTypes.string,
  level: React.PropTypes.number,
  title: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
};

SidebarItem.defaultProps = {
  items: null,
  icon: '',
  level: 0,
};
