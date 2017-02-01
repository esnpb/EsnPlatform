import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

import { getLanguages } from '../actions/languageActions';

const mapStateToProps = (store) => {
  const { members, erasmuses, languages } = store;
  return { // ten obiekt będzie == this.props wewnatrz Layouta poniżej
    members,
    erasmuses,
    languages,
    errors: null,
  };
};

@connect(mapStateToProps) // @ decorator działa troche jak higher order component
export default class MainLayout extends React.Component {
  propTypes = {
    children: React.PropTypes.node,
    dispatch: React.PropTypes.func,
  };

  defaultProps = {
    children: null,
    dispatch: null,
  };

  componentWillMount() {
    this.props.dispatch(getLanguages(1));
  }

  render() {
    const pageWrapperStyle = {
      minHeight: '405px',
    };
    return (
      <div>
        <Navbar />
        <div id="page-wrapper" style={pageWrapperStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
