import React from 'react';

export default function PanelBody(props) {
  return (
    <div class="panel-body">
      {props.children}
    </div>
  );
}

PanelBody.propTypes = {
  children: React.PropTypes.node,
};

PanelBody.defaultProps = {
  children: null,
};
