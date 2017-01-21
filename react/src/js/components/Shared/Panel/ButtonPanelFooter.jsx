import React from 'react';
import { Link } from 'react-router';

export default function ButtonPanelFooter(props) {
  return (
    <Link to={props.href}>
      <div class="panel-footer">
        <span class="pull-left">{props.title}</span>
        <span class="pull-right">
          <i class="fa fa-arrow-circle-right" />
        </span>
        <div class="clearfix" />
      </div>
    </Link>
  );
}

ButtonPanelFooter.propTypes = {
  title: React.PropTypes.string,
  href: React.PropTypes.string,
};

ButtonPanelFooter.defaultProps = {
  title: '',
  href: '/',
};
