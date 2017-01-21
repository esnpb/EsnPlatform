import React from 'react';

export default function PanelFooter(props) {
  return (
    <div class="panel-footer">
      {props.children}
    </div>
  );
}

PanelFooter.propTypes = {
  children: React.PropTypes.node,
};

PanelFooter.defaultProps = {
  children: null,
};
