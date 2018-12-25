/*
 *
 * UserJobList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_JOBS_REQUEST,
  LOAD_JOBS_SUCCESS,
  LOAD_JOBS_ERROR,
} from './constants';

export const initialState = fromJS({
  jobs: [],
  loading: false,
  error: true,
});

function userJobListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_JOBS_REQUEST:
      return state.set('loading', true).set('error', false);
    case LOAD_JOBS_SUCCESS:
      return state
        .set('loading', false)
        .set('jobs', action.jobs)
        .set('error', false);
    case LOAD_JOBS_ERROR:
      return state.set('loading', false).set('error', action.error);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default userJobListReducer;
