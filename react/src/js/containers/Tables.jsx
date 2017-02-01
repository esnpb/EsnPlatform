import React from 'react';
import { Panel, PanelHeader, PanelBody, ButtonPanelFooter } from '../components/Shared/Panel';

export default function Tables() {
  return (
    <div>
      tables page!!
      <Panel type="green">
        <PanelHeader title="third panel example" />
        <PanelBody>
          elo
        </PanelBody>
        <ButtonPanelFooter title="no elo kliknij" href="/" />
      </Panel>
    </div>
  );
}

Tables.propTypes = {
  // your propTypes here
  title: React.PropTypes.string.isRequired,
};
