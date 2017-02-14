import React from 'react';

import PanelHeader from './Panel/PanelHeader';
import PanelBody from './Panel/PanelBody';
import PanelFooter from './Panel/PanelFooter';
import InfoPanelHeader from './Panel/InfoPanelHeader';
import ButtonPanelFooter from './Panel/ButtonPanelFooter';

const panelTypes = ['default', 'primary', 'green', 'red', 'yellow'];

export default function Panel(props) {
  const type = panelTypes.indexOf(props.type) >= 0 ? props.type : 'default';
  const panelClass = `panel panel-${type} ${props.panelClass}`;
  return (
    <div class={panelClass} style={props.style}>
      {props.children}
    </div>
  );
}

Panel.propTypes = {
  type: React.PropTypes.oneOf(['default', 'primary', 'green', 'red', 'yellow']),
  children: React.PropTypes.node,
  panelClass: React.PropTypes.string,
  style: React.PropTypes.shape({}),
};

Panel.defaultProps = {
  type: 'default',
  children: null,
  panelClass: '',
  style: {},
};

export {
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  InfoPanelHeader,
  ButtonPanelFooter,
};
