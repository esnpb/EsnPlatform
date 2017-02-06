import React from 'react';
import { connect } from 'react-redux';
import { Table, TableToolbar, TableGrid, TableHeader, TableBody, TableFooter, TablePager } from '../components/Shared/Table';
import { Panel, PanelHeader, PanelBody, ButtonPanelFooter, InfoPanelHeader } from '../components/Shared/Panel';
import { getPersons } from '../actions/personActions';

const mapStateToProps = (store) => {
  const {
    users,
  } = store;
  return { // ten obiekt będzie == this.props wewnatrz Layouta poniżej
    users,
  };
};

@connect(mapStateToProps) // @ decorator działa troche jak higher order component
export default class Dashboard extends React.Component {
  propTypes = {
    children: React.PropTypes.node,
    dispatch: React.PropTypes.func,
  };

  defaultProps = {
    children: null,
    dispatch: null,
  };

  constructor() {
    super();
  }

  componentWillMount() {
    this.props.dispatch(getPersons());
  }

  render() {
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
        <Table>
          <TableToolbar />
          <TableGrid>
            <TableHeader />
            <TableBody />
            <TableFooter />
          </TableGrid>
          <TablePager />
        </Table>
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
}
