import React from 'react';
import { connect } from 'react-redux';
import { AdvancedTable, TableToolbar, Table, TableHeader, TableBody, TableFooter, TablePager } from '../components/Shared/AdvancedTable';
import { Panel, PanelHeader, PanelBody, ButtonPanelFooter, InfoPanelHeader } from '../components/Shared/Panel';
import { getPersons } from '../actions/personActions';
import DashboardMethods from './dashboardMethods';

const mapStateToProps = (store) => {
  const {
    persons,
  } = store;
  return { // ten obiekt będzie == this.props wewnatrz Layouta poniżej
    persons,
  };
};

@connect(mapStateToProps) // @ decorator działa troche jak higher order component
export default class Dashboard extends React.Component {
  propTypes = {
    dispatch: React.PropTypes.func,
  };

  defaultProps = {
    dispatch: null,
  };

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

    const rows = DashboardMethods.collectionTo2DimTable(this.props.persons);
    console.log('row', rows);
    return (
      <div>
        daszboard!!!!
        <AdvancedTable>
          <TableToolbar />
          <Table>
            <TableHeader header={headerCells} />
            <TableBody rows={rows} />
          </Table>
          <TablePager />
        </AdvancedTable>
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

const headerCells = [
  {
    class: 'sorting_asc',
    tabIndex: '0',
    ariaControls: 'dataTables-example',
    rowSpan: '1',
    colSpan: '1',
    ariaSort: 'ascending',
    ariaLabel: 'Rendering engine: activate to sort column descending',
    value: 'First name' },
  {
    class: 'sorting',
    tabIndex: '0',
    ariaControls: 'dataTables-example',
    rowSpan: '1',
    colSpan: '1',
    ariaLabel: 'Browser: activate to sort column ascending',
    value: 'Last name' },
  {
    class: 'sorting',
    tabIndex: '0',
    ariaControls: 'dataTables-example',
    rowSpan: '1',
    colSpan: '1',
    ariaLabel: 'Platform(s): activate to sort column ascending',
    value: 'Some path' },
  {
    class: 'sorting',
    tabIndex: '0',
    ariaControls: 'dataTables-example',
    rowSpan: '1',
    colSpan: '1',
    ariaLabel: 'Engine version: activate to sort column ascending',
    value: 'Birth date' },
  {
    class: 'sorting',
    tabIndex: '0',
    ariaControls: 'dataTables-example',
    rowSpan: '1',
    colSpan: '1',
    ariaLabel: 'CSS grade: activate to sort column ascending',
    value: 'User name' },
];

const rrows = [{
  class: 'gradeA',
  cells: [
    { class: 'sorting_1', value: 'Gecko' },
    { value: 'Firefox 1.0' },
    { value: 'Win 98+ / OSX.2+' },
    { class: 'center', value: '1.7' },
    { class: 'center', value: 'A' },
  ],
}, {
  class: 'gradeA',
  cells: [
    { class: 'sorting_1', value: 'Gecko' },
    { value: 'Firefox 1.5' },
    { value: 'Win 98+ / OSX.2+' },
    { class: 'center', value: '1.8' },
    { class: 'center', value: 'A' },
  ],
}, {
  class: 'gradeA',
  cells: [
    { class: 'sorting_1', value: 'Gecko' },
    { value: 'Firefox 2.0' },
    { value: 'Win 98+ / OSX.2+' },
    { class: 'center', value: '1.8' },
    { class: 'center', value: 'A' },
  ],
}, {
  class: 'gradeA',
  cells: [
    { class: 'sorting_1', value: 'Gecko' },
    { value: 'Firefox 3.0' },
    { value: 'Win 2k+ / OSX.3+' },
    { class: 'center', value: '1.9' },
    { class: 'center', value: 'A' },
  ],
}, {
  class: 'gradeA',
  cells: [
    { class: 'sorting_1', value: 'Gecko' },
    { value: 'Camino 1.0' },
    { value: 'OSX.2+' },
    { class: 'center', value: '1.8' },
    { class: 'center', value: 'A' },
  ],
}, {
  class: 'gradeA',
  cells: [
    { class: 'sorting_1', value: 'Gecko' },
    { value: 'Camino 1.5' },
    { value: 'OSX.3+' },
    { class: 'center', value: '1.8' },
    { class: 'center', value: 'A' },
  ],
}, {
  class: 'gradeA',
  cells: [
    { class: 'sorting_1', value: 'Gecko' },
    { value: 'Netscape 7.2' },
    { value: 'Win 95+ / Mac OS 8.6-9.2' },
    { class: 'center', value: '1.7' },
    { class: 'center', value: 'A' },
  ],
}, {
  class: 'gradeA',
  cells: [
    { class: 'sorting_1', value: 'Gecko' },
    { value: 'Netscape Browser 8' },
    { value: 'Win 98SE+' },
    { class: 'center', value: '1.7' },
    { class: 'center', value: 'A' },
  ],
}, {
  class: 'gradeA',
  cells: [
    { class: 'sorting_1', value: 'Gecko' },
    { value: 'Netscape Navigator 9' },
    { value: 'Win 98+ / OSX.2+' },
    { class: 'center', value: '1.8' },
    { class: 'center', value: 'A' },
  ],
}, {
  class: 'gradeA',
  cells: [
    { class: 'sorting_1', value: 'Gecko' },
    { value: 'Mozilla 1.0' },
    { value: 'Win 95+ / OSX.1+' },
    { class: 'center', value: '1' },
    { class: 'center', value: 'A' },
  ],
}];
