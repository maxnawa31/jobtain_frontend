import { take, call, takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { loadJobsError, loadJobsSuccess } from './actions';
import { LOAD_JOBS_REQUEST } from './constants';
import { callAPI } from '../../services/api';
import makeSelectLogin from '../Login/selectors';
// Individual exports for testing

function* fetchJobsAsync() {
  try {
    const client = yield select(makeSelectLogin());
    const { id } = client;
    const response = yield callAPI('GET', `users/${id}/applications`, true);
    yield put(loadJobsSuccess(response));
  } catch (error) {
    loadJobsError(error);
  }
}

export default function* watchLoadJobsAsync() {
  yield takeLatest(LOAD_JOBS_REQUEST, fetchJobsAsync);
}
