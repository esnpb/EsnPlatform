import React from 'react';
import { connect } from 'react-redux';
import { getLanguages } from '../actions/languageActions';
import { getUsers } from '../actions/userActions';
import { getUserSettings } from '../actions/userSettingActions';
import { Panel, PanelHeader, PanelBody } from '../components/Shared/Panel';
import TextFor from '../components/Form/TextFor';
import DropdownFor from '../components/Form/DropdownFor';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      item: {},
      languages: props.languages.allIds.map(lang => ({
        val: props.languages.byId[lang]._id,
        text: props.languages.byId[lang].name,
      })),
    };
    console.log('constructor', this.state);
  }

  componentWillMount() {
    console.log('cwm', this.state);
    console.log('componentWillMount');
    this.props.dispatch(getLanguages());
    this.props.dispatch(getUsers({ userName: this.props.params.userName }));
    this.props.dispatch(getUserSettings({ userName: this.props.params.userName }));
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('this', this.refs);
    console.log('prp', event);
    // this.props.dispatch(getUsers({ userName: this.props.params.userName }));
    // this.props.dispatch(getUserSettings({ userName: this.props.params.userName }));
  }

  handleCancel() {
    this.props.router.push('/users/');
  }

  handleChange(event) {
    console.log('eve',event);
    this.setState({
      ...this.state,
      item: {
        ...this.state.item,
        [event.target.name]: event.target.value,
      },
      languages: [
        ...this.state.languages,
      ]
    });
  }

  componentWillReceiveProps() {
    console.log('will receive props', this.props);
    if (this.props.users.fetched
      && this.props.userSettings.fetched
      && this.props.languages.fetched) {
      console.log('no to elo ;)');
      this.setState({
        item: {
          ...this.props.userSettings.byId[this.props.userSettings.allIds[0]],
          ...this.props.users.byId[this.props.users.allIds[0]],
        },
        languages: [
          ...this.props.languages.allIds.map(lang => ({
            val: this.props.languages.byId[lang]._id,
            text: this.props.languages.byId[lang].name,
          })),
        ],
      });
    }
  }

  render() {
    console.log('render', this.state);
    const item = this.state.item;
    const langs = this.state.languages;
    const stylePadding = { paddingTop: 10 };
    const styleMargin = { marginTop: 10 };
    const styleBtnWidth = { width: '100%' };
    return (
      <form style={stylePadding} onSubmit={this.handleSubmit}>
        <Panel style={styleMargin}>
          <PanelHeader title='User data' />
          <PanelBody>
            <div class="row">
              <div class="col-md-3">
                <TextFor field="userName" item={item} readOnly onChange={this.handleChange} />
                <TextFor field="email" item={item} label="E-mail" onChange={this.handleChange} />
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
              <div class="col-md-3">
                <TextFor field="password" item={item} readOnly onChange={this.handleChange} />
                <TextFor field="password" item={item} label="Confirm password" onChange={this.handleChange} />
              </div>
              <div class="col-md-3">
                <DropdownFor
                  field="preferedLanguage"
                  item={item}
                  onChange={this.handleChange}
                  data={langs}
                />
                <div class="form-group">
                  <label>Default start screen</label>
                  <select class="form-control">
                    <option>Dashboard</option>
                    <option>UsersList</option>
                    <option>Login</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <TextFor
                  field="preferedPagerSize"
                  item={item}
                  label="Prefered table page size"
                  onChange={this.handleChange}
                />
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
            <div class="row">
              <div class="col-md-3">
                <TextFor field="galaxyUsername" item={item} readOnly onChange={this.handleChange} />
                <TextFor field="facebookUsername" item={item} readOnly onChange={this.handleChange} />
                <TextFor field="googleUsername" item={item} readOnly onChange={this.handleChange} />
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label htmlFor="createDate">Date created</label>
                  <input
                    name="createDate"
                    class="form-control"
                    disabled type="text"
                    value={item.createDate}
                    />
                </div>
                <div class="form-group">
                  <label htmlFor="lastLoginDate">Last login date</label>
                  <input
                    name="lastLoginDate"
                    class="form-control"
                    disabled type="text"
                    value={item.lastLoginDate}
                    />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label htmlFor="lastPasswordChangedDate">Last password change date</label>
                  <input
                    name="lastPasswordChangedDate"
                    class="form-control"
                    disabled
                    type="text"
                    value={item.lastPasswordChangedDate}
                    />
                </div>
                <TextFor
                  field="failedPasswordAttemptCount"
                  item={item}
                  readOnly
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </PanelBody>
        </Panel>
        <div class="row">
          <div class="col-md-2">
            <button
              type="submit"
              class="btn btn-success"
              style={styleBtnWidth}
              onClick={this.handleSubmit}
            >
              Save
            </button>
          </div>
          <div class="col-md-2">
            <button
              type="button"
              class="btn btn-warning"
              style={styleBtnWidth}
              onClick={this.handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
}
