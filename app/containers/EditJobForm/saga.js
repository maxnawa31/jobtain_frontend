import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { EDIT_JOB_REQUEST } from './constants';
// Individual exports for testing
export default function* watchEditJobAsync() {
  yield takeLatest(EDIT_JOB_REQUEST, editJobAsync);
}

function* editJobAsync(action) {
  console.log('inside editJobAsync')
  console.log(action);
}
