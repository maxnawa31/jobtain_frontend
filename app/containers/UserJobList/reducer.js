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
  SORT_COMPANY,
  SORT_LOCATION,
  SORT_STATUS,
  SORT_TITLE,
  SORT_DATE
} from './constants';
import sortJobs, { convertDate, sortByDate } from '../../services/sort';
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
      action.jobs.forEach(obj => {
        obj.timestamp = convertDate(obj.timestamp);
      });
      return state
        .set('loading', false)
        .set('jobs', action.jobs)
        .set('error', false);
    case LOAD_JOBS_ERROR:
      return state.set('loading', false).set('error', action.error);
    case SORT_COMPANY:
      return state.set('jobs', sortJobs(state.get('jobs'), 'company'));
    case SORT_LOCATION:
      return state.set('jobs', sortJobs(state.get('jobs'), 'location'));
    case SORT_STATUS:
      return state.set('jobs', sortJobs(state.get('jobs'), 'status'));
    case SORT_TITLE:
      return state.set('jobs', sortJobs(state.get('jobs'), 'title'));
    case SORT_DATE:
      return state.set('jobs', sortByDate(state.get('jobs')));
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default userJobListReducer;
