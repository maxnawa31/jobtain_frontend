/*
 *
 * Signup reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESSFUL,
  SIGNUP_ERROR,
} from './constants';

export const initialState = fromJS({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  username: '',
  error: false,
  loading: false,
});

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SIGNUP_REQUEST:
      return state.set('loading', true);
    case SIGNUP_SUCCESSFUL:
      state.set('loading', false)
      return fromJS({
        ...state,
        ...action.userObj,
      });
    case SIGNUP_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default signupReducer;
