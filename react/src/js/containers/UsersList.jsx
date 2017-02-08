import React from 'react';
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
  constructor() {
    super();
    showEditUserModal = showEditUserModal.bind(this);
  }

  propTypes = {
    children: React.PropTypes.node,
    dispatch: React.PropTypes.func,
  };

  defaultProps = {
    children: null,
    dispatch: null,
  };

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
      userList.push(<tr key={user._id}>
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
        <td><button onClick={showEditUserModal}></button></td>
      </tr>);
    }

    return (
      <div>
        users list!!!!
        <table>
          <thead>
            <tr>
              <th>User name</th>
              <th>Email</th>
              <th>Is approved</th>
              <th>Is locked out</th>
              <th>Create date</th>
              <th>Last login date</th>
              <th>Language</th>
              <th>Start screen</th>
              <th>Pager size</th>
              <th>Time zone</th>
            </tr>
          </thead>
          <tbody>
            {userList}
          </tbody>
        </table>
      </div>
    );
  }
}
