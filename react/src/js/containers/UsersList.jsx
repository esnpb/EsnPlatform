import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';
import { getUserSettings } from '../actions/userSettingActions';
import CrudButtons from '../components/Table/CrudButtons';

const mapStateToProps = (store) => {
  const {
    users,
    userSettings,
  } = store;
  return { // ten obiekt będzie == this.props wewnatrz Layouta poniżej
    users,
    userSettings,
  };
};

@connect(mapStateToProps) // @ decorator działa troche jak higher order component
export default class UsersList extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    users: React.PropTypes.shape({
      byId: React.PropTypes.object,
      allIds: React.PropTypes.arrayOf(React.PropTypes.string),
    }),
    userSettings: React.PropTypes.shape({
      byId: React.PropTypes.object,
      allIds: React.PropTypes.arrayOf(React.PropTypes.string),
    }),
  };

  static defaultProps = {
    dispatch: null,
    users: { byId: {}, allIds: [] },
    userSettings: { byId: {}, allIds: [] },
  };

  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.itemSelection = this.itemSelection.bind(this);
    this.buttonsFormatter = this.buttonsFormatter.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getUsers());
    this.props.dispatch(getUserSettings());
  }

  onDelete(cell, row) {
    console.log('cell', cell);
    console.log('row', row);
    // dispatch user_delete table should rerender after  reloading data
  }

  onEdit(cell, row) {
    this.props.router.push('/users/' + row.userName);
  }

  itemSelection() {
    return (<input type="checkbox" />);
  }

  buttonsFormatter(cell, row) {
    return (<CrudButtons cell={cell} row={row} onDelete={this.onDelete} onEdit={this.onEdit} />);
  }

  render() {
    const userList = [];
    for (let i = 0; i < this.props.users.allIds.length; i++) {
      const user = this.props.users.byId[this.props.users.allIds[i]];
      let setting = null;
      if (this.props.userSettings) {
        for (let j = 0; j < this.props.userSettings.allIds.length; j++) {
          setting = this.props.userSettings.byId[this.props.userSettings.allIds[j]];
          if (setting.userName === user.userName) {
            break;
          }
        }
      }
      userList.push({
        ...user,
        ...setting,
      });
    }

    return (
      <div>
        users list!!!!
        <BootstrapTable
          data={userList}
          options={{
            noDataText: 'no users',
            handleConfirmDeleteRow: this.onDelete }}
          selectRow={{ mode: 'checkbox', bgColor: '#aaa' }}
          hover
          striped
          pagination
        >
          <TableHeaderColumn dataField="_id" isKey>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="userName" dataSort>User Name</TableHeaderColumn>
          <TableHeaderColumn dataField="email" dataSort>Email</TableHeaderColumn>
          <TableHeaderColumn dataField="_id" dataFormat={this.buttonsFormatter} />
        </BootstrapTable>

      </div>
    );
  }
}
