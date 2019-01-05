/*
 *
 * NewJobForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  NEW_JOB_REQUEST,
  NEW_JOB_SUCCESS,
  NEW_JOB_ERROR,
} from './constants';

export const initialState = fromJS({
  error: true,
  loading: false,
  errorMessage:''
});

function newJobFormReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_JOB_REQUEST:
      return state.set('loading', true).set('error', false);
    case NEW_JOB_SUCCESS:
      return state.set('loading', false).set('error', false);
    case NEW_JOB_ERROR:
      return state.set('loading', false).set('error', true).set('errorMessage',action.error);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default newJobFormReducer;
