import React from 'react';

import PanelHeader from './Panel/PanelHeader';
import PanelBody from './Panel/PanelBody';
import PanelFooter from './Panel/PanelFooter';
import InfoPanelHeader from './Panel/InfoPanelHeader';
import ButtonPanelFooter from './Panel/ButtonPanelFooter';

const panelTypes = ['default', 'primary', 'green', 'red', 'yellow'];

export default function Panel(props) {
  const type = panelTypes.indexOf(props.type) >= 0 ? props.type : 'default';
  const panelClass = `panel panel-${type}`;
  return (
    <div class={panelClass}>
      {props.children}
    </div>
  );
}

Panel.propTypes = {
  type: React.PropTypes.oneOf(['default', 'primary', 'green', 'red', 'yellow']),
  children: React.PropTypes.node,
};

Panel.defaultProps = {
  type: 'default',
  children: null,
};

export {
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  InfoPanelHeader,
  ButtonPanelFooter,
};
