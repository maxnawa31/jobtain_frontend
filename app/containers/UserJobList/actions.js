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
  SORT_COMPANY,
  SORT_LOCATION,
  SORT_STATUS,
  SORT_TITLE,
  SORT_DATE
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

export function sortCompany() {
  return {
    type: SORT_COMPANY,
  };
}

export function sortLocation() {
  return {
    type: SORT_LOCATION
  }
}

export function sortTitle() {
  return {
    type: SORT_TITLE
  }
}

export function sortStatus() {
  return {
    type: SORT_STATUS
  }
}

export function sortDate() {
  return {
    type: SORT_DATE
  }
}