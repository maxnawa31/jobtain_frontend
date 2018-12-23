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
  switch (action.type) {
    case DEFAULT_ACTION:
    case CLIENT_SET:
      const { id, token } = action.userObj;
      return state.set('id', id, 'token', token);
    case CLIENT_UNSET:
      return state.set('id', null, 'token', null);
    default:
      return state;
  }
}

export default clientReducer;
