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
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
});

function loginReducer(state = initialState, action) {
  console.log('inside login Reducer')
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOGIN_REQUEST:
      return state
        .set('requesting', true)
        .set('successful', false)
        .set('messages', [{ body: 'Loggin in...', time: new Date() }]);
    case LOGIN_SUCCESSFUL:
      return state
        .set('errors', [])
        .set('messages', [])
        .set('requesting', false)
        .set('successful', true);
    case LOGIN_ERROR:
      state.set('errors', []);
      return state
        .set(
          'errors',
          state
            .get('errors')
            .concat([{ body: action.error.toString(), time: new Date() }]),
        )
        .set('messages', [])
        .set('requesting', false)
        .set('successful', false);
    default:
      return state;
  }
}

export default loginReducer;
