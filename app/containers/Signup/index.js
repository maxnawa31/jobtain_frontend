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

/* eslint-disable react/prefer-stateless-function */
export class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    username: '',
    firstName: '',
    lastName: '',
  };

  handleChange= (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = (e) => {

  }
  render() {
    return (
      <form onChange={this.handleChange}>
        <input name="email" type="text" />
        <input name="password" type="password" />
        <input name="username" type="text" />
        <input name="firstName" type="text" />
        <input name="lastName" type="text" />
        <button>Sign Up!</button>
      </form>
    );
  }
}

Signup.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignup(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
