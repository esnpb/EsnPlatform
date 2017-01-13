import React from 'react';

export default class SeeAllDropdownItem extends React.Component {
  render() {
    const item = this.props;
    return (
      <li>
        <a class="text-center" href={item.href}>
          <strong>{item.title}</strong>
          <i class="fa fa-angle-right" />
        </a>
      </li>
    );
  }
}
