/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESSFUL,
} from './constants';

export const initialState = fromJS({
  email: '',
  password: '',
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOGIN_REQUEST:
      return state.set('email', action.email, 'password', action.password);
    default:
      return state;
  }
}

export default loginReducer;
