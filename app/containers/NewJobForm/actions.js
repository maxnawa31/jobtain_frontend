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
  console.log('inside new job request')
  return {
    type: NEW_JOB_REQUEST,
    newJobData
  };
}

export function newJobSuccess() {
  console.log('inside newJobSuccess')
  return {
    type: NEW_JOB_SUCCESS,
  };
}

export function newJobError(error) {
  console.log('inside job error', error)
  return {
    type: NEW_JOB_ERROR,
    error
  };
}
