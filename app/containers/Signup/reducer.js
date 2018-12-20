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
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  username: '',
});

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SIGNUP_SUCCESSFUL:
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
}

export default signupReducer;
