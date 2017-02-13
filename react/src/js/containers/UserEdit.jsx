import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';
import { getUserSettings } from '../actions/userSettingActions';
import { Panel, PanelHeader, PanelBody } from '../components/Shared/Panel';
import TextFor from '../components/Form/TextFor';

const mapStateToProps = (store) => {
  const {
    users,
    userSettings,
    languages,
  } = store;
  return { // ten obiekt będzie == this.props wewnatrz Layouta poniżej
    users,
    userSettings,
    languages,
  };
};

@connect(mapStateToProps) // @ decorator działa troche jak higher order component
export default class UserEdit extends React.Component {
  static propTypes = {
    params: React.PropTypes.shape({}),
    dispatch: React.PropTypes.func,
    users: React.PropTypes.shape({
      byId: React.PropTypes.object,
      allIds: React.PropTypes.arrayOf(React.PropTypes.string),
    }),
    userSettings: React.PropTypes.shape({
      byId: React.PropTypes.object,
      allIds: React.PropTypes.arrayOf(React.PropTypes.string),
    }),
    languages: React.PropTypes.shape({
      byId: React.PropTypes.object,
      allIds: React.PropTypes.arrayOf(React.PropTypes.string),
    }),
  };

  static defaultProps = {
    params: {},
    dispatch: null,
    users: { byId: {}, allIds: [] },
    userSettings: { byId: {}, allIds: [] },
    languages: { byId: {}, allIds: [] },
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(getUsers({ userName: this.props.params.userName }));
    this.props.dispatch(getUserSettings({ userName: this.props.params.userName }));
  }

  render() {
    const item = {
      ...this.props.users.byId[this.props.users.allIds[0]],
      ...this.props.userSettings.byId[this.props.userSettings.allIds[0]],
    };
    const stylePadding = { paddingTop: 10 };
    return (
      <form style={stylePadding}>
        <Panel>
          <PanelHeader title='User data' />
          <PanelBody>
            <div class="row">
              <div class="col-md-3">
                <TextFor field="userName" item={item} readOnly />
                <TextFor field="email" item={item} label="E-mail" />
                <label>Password</label>
                <input class="form-control" type="password" />
                <label>Confirm password</label>
                <input class="form-control" type="password" />
                <div class="checkbox">
                  <label htmlFor="isLockedOut">
                    <input
                      name="isLockedOut"
                      type="checkbox"
                      checked={item.isLockedOut}
                    />
                    Is locked out
                  </label>
                </div>
              </div>
              <div class="col-md-3" />
              <div class="col-md-3">
                <label htmlFor="createDate">Date created</label>
                <input
                  name="createDate"
                  class="form-control"
                  disabled type="text"
                  value={item.createDate}
                  />
                <label htmlFor="lastLoginDate">Last login date</label>
                <input
                  name="lastLoginDate"
                  class="form-control"
                  disabled type="text"
                  value={item.lastLoginDate}
                  />
                <label htmlFor="lastPasswordChangedDate">Last password change date</label>
                <input
                  name="lastPasswordChangedDate"
                  class="form-control"
                  disabled
                  type="text"
                  value={item.lastPasswordChangedDate}
                  />
                <label htmlFor="failedPasswordAttemptCount">Failed passwords attempts</label>
                <input
                  name="failedPasswordAttemptCount"
                  class="form-control"
                  disabled
                  type="text"
                  value={item.failedPasswordAttemptCount}
                  />
              </div>
            </div>
          </PanelBody>
        </Panel>
        <Panel>
          <PanelHeader title='User settings' />
          <PanelBody>
            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <label>Galaxy username</label>
                  <input class="form-control" disabled type="text" />
                  <label>Facebook username</label>
                  <input class="form-control" disabled type="text" />
                  <label>Google username</label>
                  <input class="form-control" disabled type="text" />
                </div>
                <div class="form-group">
                  <label>Prefered language</label>
                  <select class="form-control">
                    <option>PL</option>
                    <option>EN</option>
                    <option>GE</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Default start screen</label>
                  <select class="form-control">
                    <option>Dashboard</option>
                    <option>UsersList</option>
                    <option>Login</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Prefered table page size</label>
                  <input class="form-control" type="text" placeholder="E-mail address" />
                </div>
                <div class="form-group">
                  <label>Time zone</label>
                  <select class="form-control">
                    <option>CET</option>
                    <option>WET</option>
                    <option>UTC</option>
                  </select>
                </div>
              </div>
            </div>
          </PanelBody>
        </Panel>
      </form>
    );
  }
}
