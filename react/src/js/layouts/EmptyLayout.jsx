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
export default class Layout extends React.Component {
  componentWillMount() {
    // this.props.dispatch(fetchUser());
  }
  render() {
    const pageWrapperStyle = {
      minHeight: "405px",
    };
    return (
      <div>
        no elo, EmptyLayout
        <div class="page-wrapper" style={pageWrapperStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
