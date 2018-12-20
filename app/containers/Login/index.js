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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import { loginRequest } from './actions';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };
  handleLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { loginRequest } = this.props;
    loginRequest(email, password);
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin} action="">
          <input
            onChange={this.handleChange}
            name="email"
            type="text"
            placeholder="Email"
          />
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit" placeholder="submit">
            Submit
          </button>
        </form>
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
