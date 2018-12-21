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
import { Link } from 'react-router-dom';
import { signupRequest } from './actions';
import {
  SignupForm,
  SignupInput,
  SignupButton,
  SignupH1,
  SignupContainer,
  SignupSidePanel,
} from '../../components/StyledComponents/';
/* eslint-disable react/prefer-stateless-function */
export class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    username: '',
    firstname: '',
    lastname: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signupRequest({ ...this.state });
  };
  render() {
    return (
      <SignupContainer>
        <SignupSidePanel />
        <SignupForm onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <SignupH1>Start tracking your jobs today!</SignupH1>
          <SignupInput name="email" type="text" placeholder="Email" />
          <SignupInput name="password" type="password" placeholder="Password" />
          <SignupInput name="username" type="text" placeholder="Username" />
          <SignupInput name="firstname" type="text" placeholder="First Name" />
          <SignupInput name="lastname" type="text" placeholder="Last Name" />
          <SignupButton>Sign Up!</SignupButton>
        </SignupForm>
        <SignupSidePanel>
          <SignupButton>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/login"
            >
              Log in
            </Link>
          </SignupButton>
        </SignupSidePanel>
      </SignupContainer>
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
    signupRequest: userObj => dispatch(signupRequest(userObj)),
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
