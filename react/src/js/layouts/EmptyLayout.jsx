import React from 'react';
import { connect } from 'react-redux';

@connect((store) => { // @ decorator działa jak [Attribute] w .NET
  const { members, erasmuses, countries } = store;
  return { // ten obiekt będzie == this.props wewnatrz Layouta poniżej
    members,
    erasmuses,
    countries,
    errors: null,
  };
})
export default class EmptyLayout extends React.Component {
  componentWillMount() {
    // this.props.dispatch(fetchUser());
  }
  render() {
    return (
      <div id="container">
        {this.props.children}
      </div>
    );
  }
}

EmptyLayout.propTypes = {
  children: React.PropTypes.node.isRequired,
};
