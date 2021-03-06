/*
 *
 * NewJobForm actions
 *
 */

import {
  DEFAULT_ACTION,
  NEW_JOB_REQUEST,
  NEW_JOB_SUCCESS,
  NEW_JOB_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function newJobRequest(newJobData) {
  return {
    type: NEW_JOB_REQUEST,
    newJobData
  };
}

export function newJobSuccess() {
  return {
    type: NEW_JOB_SUCCESS,
  };
}

export function newJobError(error) {
  return {
    type: NEW_JOB_ERROR,
    error
  };
}
