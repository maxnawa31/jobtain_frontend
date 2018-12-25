/*
 *
 * UserJobList actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_JOBS_REQUEST,
  LOAD_JOBS_SUCCESS,
  LOAD_JOBS_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadJobsRequest() {
  return {
    type: LOAD_JOBS_REQUEST,
  };
}

export function loadJobsSuccess(jobs) {
  return {
    type: LOAD_JOBS_SUCCESS,
    jobs,
  };
}

export function loadJobsError(error) {
  return {
    type: LOAD_JOBS_ERROR,
    error,
  };
}
