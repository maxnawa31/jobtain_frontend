/*
 *
 * Client reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, CLIENT_SET, CLIENT_UNSET } from './constants';

export const initialState = fromJS({
  id: null,
  token: null,
});

function clientReducer(state = initialState, action) {
  console.log('inside client reducer')
  switch (action.type) {
    case DEFAULT_ACTION:
      return state
    case CLIENT_SET:
      const { id, token } = action.userObj;
      return state.set('id', id).set('token', token);
    case CLIENT_UNSET:
      return state.set('id', null).set('token', null);
    default:
      return state;
  }
}

export default clientReducer;
