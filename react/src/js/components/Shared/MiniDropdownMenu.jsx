import React from 'react';

export default function MiniDropdownMenu(props) {
  const itemsList = props.items.map(item =>
    (item.title.startsWith('---') ?
      <li key={item.key} class="divider" /> :
      <li key={item.key}><a href={item.href}>{item.title}</a></li>));
  return (
    <div class="pull-right">
      <div class="btn-group">
        <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          {props.title}
          <span class="caret" />
        </button>
        <ul class="dropdown-menu pull-right" role="menu">
          {itemsList}
        </ul>
      </div>
    </div>
  );
}

MiniDropdownMenu.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
  })),
  title: React.PropTypes.string.isRequired,
};

MiniDropdownMenu.defaultProps = {
  title: 'Menu',
  items: [],
};
