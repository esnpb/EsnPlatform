import React from 'react';
import timeago from 'timeago-words';

export default function NotificationDropdownItem(props) {
  const iconClass = `fa fa-fw ${props.icon}`;
  return (
    <li>
      <a href={props.href}>
        <div>
          <i class={iconClass} />
          { props.titles[props.language] != null ?
            props.titles[props.language] :
            props.titles.gb }
          <span class="pull-right text-muted small">
            {timeago(new Date(props.timestamp))}
          </span>
        </div>
      </a>
    </li>
  );
}

NotificationDropdownItem.propTypes = {
  timestamp: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string,
  // priority: React.PropTypes.number,
  href: React.PropTypes.string.isRequired,
  language: React.PropTypes.string,
  titles: React.PropTypes.shape({
    gb: React.PropTypes.string.isRequired,
    pl: React.PropTypes.string,
  }),
};

NotificationDropdownItem.defaultProps = {
  icon: '',
  // priority: 0,
  language: 'gb',
  titles: {
    gb: '',
    pl: '',
  },
};
