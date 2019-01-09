import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { EDIT_JOB_REQUEST, EDIT_JOB_SUCCESS } from './constants';
import { editJobError,editJobSuccess } from './actions';
import { push } from 'react-router-redux';
import { getId, getToken } from '../../services/token';
import { callAPI } from '../../services/api';

// Individual exports for testing
export default function* watchEditJobAsync() {
  yield takeLatest(EDIT_JOB_REQUEST, editJobAsync);
}

function* editJobAsync(action) {
  try {
    const { jobData } = action;
    const { userId, jobId } = action;
    yield callAPI(
      'PATCH',
      `users/${userId}/applications/${jobId}`,
      true,
      jobData,
    );
    yield put(editJobSuccess());
    yield put(push(`/users/${userId}`));
  } catch (error) {
    yield put(editJobError(error));
  }
}
