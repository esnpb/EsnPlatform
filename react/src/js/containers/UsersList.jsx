import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';
import { getUserSettings } from '../actions/userSettingActions';

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
    this.showEditUserModal = this.showEditUserModal.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getUsers());
    this.props.dispatch(getUserSettings());
  }

  showEditUserModal() {

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
      /*userList.push(<tr key={user._id}>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.isApproved}</td>
        <td>{user.isLockedOut}</td>
        <td>{user.createDate}</td>
        <td>{user.lastLoginDate}</td>
        <td>{setting ? setting.preferedLanguage : ''}</td>
        <td>{setting ? setting.defaultStartScreen : ''}</td>
        <td>{setting ? setting.preferedPagerSize : ''}</td>
        <td>{setting ? setting.timeZone : ''}</td>
        <td></td>
      </tr>);*/
    }

    return (
      <div>
        users list!!!!
        <BootstrapTable
          data={[{_id: 1, userName:'test1', email: 'email1'},
          {_id: 2, userName:'test2', email: 'email2'},
        {_id: 3, userName:'test3', email: 'email3'}]}
          hover
        >
          <TableHeaderColumn dataField="_id" isKey>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="userName">User Name</TableHeaderColumn>
          <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
