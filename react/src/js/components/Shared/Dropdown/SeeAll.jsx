import React from 'react';

export default function SeeAllDropdownItem(props) {
  return (
    <li>
      <a class="text-center" href={props.href}>
        <strong>
          { props.titles[props.language] != null ?
            props.titles[props.language] :
            props.titles.gb }
        </strong>
        <i class="fa fa-angle-right" />
      </a>
    </li>
  );
}

SeeAllDropdownItem.propTypes = {
  titles: React.PropTypes.shape({
    gb: React.PropTypes.string.isRequired,
    pl: React.PropTypes.string,
  }),
  language: React.PropTypes.string,
  href: React.PropTypes.string.isRequired,
};

SeeAllDropdownItem.defaultProps = {
  language: 'gb',
  titles: {
    gb: '',
    pl: '',
  },
  href: '',
};
