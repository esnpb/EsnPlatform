import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import MainLayoutMethods from './mainLayoutMethods';
import { getMenuItems } from '../actions/menuItemActions';
import { getNotifications } from '../actions/notificationActions';

const mapStateToProps = (store) => {
  const {
    members,
    erasmuses,
    languages,
    menuItems,
    menuItemRenditions,
    notifications,
    users,
  } = store;
  return { // ten obiekt będzie == this.props wewnatrz Layouta poniżej
    members,
    erasmuses,
    languages,
    menuItems,
    menuItemRenditions,
    notifications,
    users,
    errors: null,
    settings: {
      language: 'gb',
    },
    currentUser: 'karol',
  };
};

@connect(mapStateToProps) // @ decorator działa troche jak higher order component
export default class MainLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    dispatch: React.PropTypes.func,
    menuItems: React.PropTypes.shape({
      byId: React.PropTypes.object,
      allIds: React.PropTypes.arrayOf(React.PropTypes.string),
    }),
    notifications: React.PropTypes.shape({
      byId: React.PropTypes.object,
      allIds: React.PropTypes.arrayOf(React.PropTypes.string),
    }),
    settings: React.PropTypes.shape({
      language: React.PropTypes.string,
    }),
    currentUser: React.PropTypes.string,
  };

  static defaultProps = {
    children: null,
    dispatch: null,
    menuItems: { byId: {}, allIds: [] },
    notifications: { byId: {}, allIds: [] },
    // users: null,
    settings: {
      language: 'gb',
    },
    currentUser: '',
  };

  constructor() {
    super();
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getMenuItems());
    this.props.dispatch(getNotifications());
  }

  changeLanguage = () => {
    this.props.settings.language = 'pl';
  }

  render() {
    const pageWrapperStyle = {
      minHeight: '405px',
    };
    const menuItemsTree = MainLayoutMethods.buildMenuTree(this.props.menuItems);
    const alerts = MainLayoutMethods.mapNotificationsToAlerts(
      this.props.notifications,
      this.props.currentUser);
    return (
      <div>
        <Navbar
          menuItemsTree={menuItemsTree}
          alerts={alerts}
          language={this.props.settings.language}
        />
        <div id="page-wrapper" style={pageWrapperStyle}>
          {this.props.children}
          <a href="#test" onClick={this.changeLanguage}>test</a>
        </div>
      </div>
    );
  }
}
