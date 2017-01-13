import React from 'react';
import { connect } from 'react-redux';
import { updateCountry } from '../actions/countryActions.js';
import { erasmusActions } from '../actions/erasmusActions';
import { memberActions } from '../actions/memberActions';
import { errorActions } from '../actions/errorActions';
import Navbar from './Navbar';

@connect((store) => { //@ decorator działa jak [Attribute] w .NET
  var { members, erasmuses, countries, errors } = store;
  return { //ten obiekt będzie == this.props wewnatrz Layouta poniżej
    members,
    erasmuses,
    countries,
    errors: null
  }
})
export default class Layout extends React.Component {
  componentWillMount(){
    //this.props.dispatch(fetchUser());
  }
  render(){
    return (
      <Navbar />
    );
  }
}
