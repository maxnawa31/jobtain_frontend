/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import { loginRequest } from './actions';
import saga from './saga';
import {
  LoginForm,
  LoginInput,
  LoginButton,
  LoginSpan,
  LoginH1,
} from '../../components/StyledComponents/LoginStyledComponents';
import Client from '../Client';
/* eslint-disable react/prefer-stateless-function */
export class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };
  handleLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    const { loginRequest } = this.props;
    loginRequest(email, password);
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <LoginForm onSubmit={this.handleLogin} action="">
          <LoginH1>Login to see your jobs</LoginH1>
          <LoginInput
            onChange={this.handleChange}
            name="email"
            type="text"
            placeholder="Email"
          />
          <LoginInput
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <LoginButton login type="submit" placeholder="Log In">
            Log In
          </LoginButton>
          <LoginSpan>Or</LoginSpan>
          {/* <Client/> */}
          <Link
            style={{
              textDecoration: 'none',
              color: 'black',
              margin: '0 auto',
              height: '10%',
              backgroundColor:"rgb(225,231,235)",
              textAlign:'center',
              paddingTop: '2%',
              width: '70%',
            }}
            to="/users/signup"
          >
            Sign Up
          </Link>
        </LoginForm>
      </div>
    );
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loginRequest: (email, password) => dispatch(loginRequest(email, password)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'login',
  reducer,
});
const withSaga = injectSaga({
  key: 'login',
  saga,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
