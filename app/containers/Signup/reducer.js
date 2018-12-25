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
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
});

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SIGNUP_REQUEST:
      return state
        .set('requesting', true)
        .set('successful', false)
        .set('messages', [
          {
            body: 'Signing up...',
            time: new Date(),
          },
        ])
        .set('errors', []);
    case SIGNUP_SUCCESSFUL:
      return state
        .set('errors', [])
        .set('messages', [
          {
            body: `Successfull created acount for ${action.userObj.email}`,
            time: new Date(),
          },
        ])
        .set('requesting', false)
        .set('successful', true);
    case SIGNUP_ERROR:
      console.log(state.get('errors'));
      state.set('errors', [])
      return state
        .set(
          'errors',
          state.get('errors').concat([
            {
              body: action.error.message,
              time: new Date(),
            },
          ]),
        )
        .set('messages', [])
        .set('requesting', false)
        .set('successful', false);
    default:
      return state;
  }
}

export default signupReducer;
