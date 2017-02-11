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
  propTypes = {
    dispatch: React.PropTypes.func,
    users: React.PropTypes.arrayOf(React.PropTypes.object),
    userSettings: React.PropTypes.arrayOf(React.PropTypes.object),
  };

  defaultProps = {
    dispatch: null,
    users: {},
    userSettings: {},
  };

  constructor() {
    super();
    // this.showEditUserModal = this.showEditUserModal.bind(this);

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.itemSelection = this.itemSelection.bind(this);
    this.itemManipulationButtons = this.itemManipulationButtons.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getUsers());
    this.props.dispatch(getUserSettings());
  }

  onDelete(a) {
    console.log('delete', a, this);
  }

  onEdit(a) {
    console.log('edit', a, this);
  }

  itemSelection() {
    console.log('selection', this);
    return (<input type="checkbox" />);
  }

  itemManipulationButtons(cell, row) {
    console.log('coll,row', cell, row);
    return (<CrudButtons onDelete={this.onDelete} onEdit={this.onEdit} />);
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
          options={{ noDataText: 'no users' }}
          selectRow={{ mode: 'checkbox', bgColor: '#aaa' }}
          hover
          striped
          pagination
        >
          <TableHeaderColumn dataField="_id" isKey>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="userName" dataSort>User Name</TableHeaderColumn>
          <TableHeaderColumn dataField="email" dataSort>Email</TableHeaderColumn>
          <TableHeaderColumn dataField="_id" dataFormat={this.itemManipulationButtons} />
        </BootstrapTable>
      </div>
    );
  }
}
