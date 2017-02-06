import React from 'react';
import { Link } from 'react-router';
import intToOrdinalText from '../../helpers/math';

export default function SidebarItem(props) {
  const children = props.items && props.items.length > 0 ? props.items.map(obj =>
    <SidebarItem {...obj} language={props.language} />) : [];
  const iconClass = `fa fa-fw ${props.icon}`;
  const levelClass = `nav nav-${intToOrdinalText(props.level + 2)}-level`;
  return (
    <li>
      <Link href={props.targetUrl} activeClassName="active">
        { props.icon ? <i class={iconClass} /> : '' }
        { props.titles[props.language] != null ? props.titles[props.language] : props.titles.gb }
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
  titles: React.PropTypes.shape({
    gb: React.PropTypes.string.isRequired,
    pl: React.PropTypes.string,
  }),
  language: React.PropTypes.string,
  targetUrl: React.PropTypes.string.isRequired,
};

SidebarItem.defaultProps = {
  items: null,
  icon: '',
  level: 0,
  language: 'gb',
  titles: {
    gb: '',
    pl: '',
  },
};
