import { take, call, takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { loadJobsError, loadJobsSuccess } from './actions';
import { LOAD_JOBS_REQUEST } from './constants';
import { callAPI } from '../../services/api';
import makeSelectLogin from '../Login/selectors';
import { getId } from '../../services/token';
// Individual exports for testing

function* fetchJobsAsync() {
  try {
    // const client = yield select(makeSelectLogin());
    // const { id } = client;
    const userId = yield getId()
    const response = yield callAPI('GET', `users/${userId}/applications`, true);
    yield put(loadJobsSuccess(response));
  } catch (error) {
    yield put(loadJobsError(error));
  }
}

export default function* watchLoadJobsAsync() {
  yield takeLatest(LOAD_JOBS_REQUEST, fetchJobsAsync);
}
