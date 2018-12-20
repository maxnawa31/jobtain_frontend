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

export function signupRequest() {
  return {
    type: SIGNUP_REQUEST
  }
}

export function signupSucessful() {
  return {
    type: SIGNUP_SUCCESSFUL
  }
}

export function signupError(error) {
  return {
    type: SIGNUP_ERROR,
    error
  }
}