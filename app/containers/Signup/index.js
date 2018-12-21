/**
 *
 * Signup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignup from './selectors';
import reducer from './reducer';
import saga from './saga';
import {signupRequest} from './actions'

/* eslint-disable react/prefer-stateless-function */
export class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    username: '',
    firstname: '',
    lastname: '',
  };

  handleChange= (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signupRequest({...this.state})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <input name="email" type="text" />Email
        <input name="password" type="password" />Password
        <input name="username" type="text" />Username
        <input name="firstname" type="text" />First Name
        <input name="lastname" type="text" />Last Name
        <button>Sign Up!</button>
      </form>
    );
  }
}

Signup.propTypes = {
  signupRequest: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignup(),
});

function mapDispatchToProps(dispatch) {
  return {
    signupRequest:(userObj) =>dispatch(signupRequest(userObj)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signup', reducer });
const withSaga = injectSaga({ key: 'signup', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Signup);
