import {
  take,
  call,
  put,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import { callAPI } from '../../services/api';
import { getToken, getId } from '../../services/token';
import { NEW_JOB_REQUEST, NEW_JOB_SUCCESS } from './constants';
import { push } from 'react-router-redux';
import { newJobError, newJobSuccess } from './actions';

export default function* watchNewJobAsync() {
    yield takeLatest(NEW_JOB_REQUEST, newJobAsync);
}
// Individual exports for testing

function* newJobAsync(action) {
  try {
    const { newJobData } = action;
    const id = yield getId();
    // yield call(callAPI, 'POST', `users/${id}/applications`, true, newJobData);
    yield callAPI('POST',`users/${id}/applications`, true, newJobData)
    yield put({ type: NEW_JOB_SUCCESS });
    yield put(push(`/users/${id}`));
  } catch (error) {
    yield put(newJobError(error));
  }
}
