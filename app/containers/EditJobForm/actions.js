/*
 *
 * EditJobForm actions
 *
 */

import {
  DEFAULT_ACTION,
  EDIT_JOB_REQUEST,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function editJobRequest(jobData) {
  return {
    type: EDIT_JOB_REQUEST,
    jobData,
  };
}

export function editJobSuccess() {
  return {
    type: EDIT_JOB_SUCCESS,
  };
}

export function editJobError(error) {
  return {
    type: EDIT_JOB_ERROR,
    error,
  };
}
