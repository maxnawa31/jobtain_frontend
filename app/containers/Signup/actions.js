/*
 *
 * Signup actions
 *
 */

import {
  DEFAULT_ACTION,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESSFUL,
  SIGNUP_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function signupRequest(userObj) {
  return {
    type: SIGNUP_REQUEST,
    userObj
  }
}

export function signupSucessful(userObj) {

  return {
    type: SIGNUP_SUCCESSFUL,
    userObj
  }
}

export function signupError(error) {
  return {
    type: SIGNUP_ERROR,
    error
  }
}