/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESSFUL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loginRequest(email, password) {
  return {
    type: LOGIN_REQUEST,
    userObj: {
      email,
      password,
    },
  };
}

export function loginSuccessful() {
  return {
    type: LOGIN_SUCCESSFUL,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
