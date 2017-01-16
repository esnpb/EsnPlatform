import React from 'react';

export default function SeeAllDropdownItem(props) {
  return (
    <li>
      <a class="text-center" href={props.href}>
        <strong>{props.title}</strong>
        <i class="fa fa-angle-right" />
      </a>
    </li>
  );
}

SeeAllDropdownItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
};
