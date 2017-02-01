import React from 'react';

import { Panel, PanelHeader, PanelBody, ButtonPanelFooter, InfoPanelHeader } from '../components/Shared/Panel';

export default function Dashboard() {
  const panelMenu = [
    { key: 1, title: 'foo foo', href: '#' },
    { key: 2, title: 'bar bar', href: '#' },
    { key: 3, title: 'bum bum', href: '#' },
    { key: 4, title: '---', href: '#' },
    { key: 5, title: 'kici kici', href: '#' },
  ];
  return (
    <div>
      daszboard!!!!
      <Panel>
        <PanelHeader title="test 1 example" />
        <PanelBody>
          elo elo 320! 123
        </PanelBody>
      </Panel>
      <Panel type="primary">
        <InfoPanelHeader title="other panel example" icon="comments" counter={33} />
        <PanelBody>
          elo elo 320!
        </PanelBody>
      </Panel>
      <Panel type="red">
        <PanelHeader title="third panel example" menuItems={panelMenu} menuTitle="Super Actions" />
        <PanelBody>
          elo elo 320! yyy
        </PanelBody>
        <ButtonPanelFooter title="no elo kliknij" href="/" />
      </Panel>
    </div>
  );
}
