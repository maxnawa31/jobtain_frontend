/*
 *
 * EditJobForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  EDIT_JOB_REQUEST,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
} from './constants';

export const initialState = fromJS({
  error: true,
  loading: false,
  errorMessage: '',
});

function editJobFormReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case EDIT_JOB_REQUEST:
      return state.set('loading', true).set('error', false);
    case EDIT_JOB_SUCCESS:
      return state.set('loading', false).set('error', false);
    case EDIT_JOB_ERROR:
      return state
        .set('loading', false)
        .set('error', true)
        .set('errorMessage', action.error);
    default:
      return state;
  }
}

export default editJobFormReducer;
