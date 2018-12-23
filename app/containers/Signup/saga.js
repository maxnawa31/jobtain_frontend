import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { SIGNUP_REQUEST, SIGNUP_SUCCESSFUL, SIGNUP_ERROR } from './constants';
import { signupSucessful, signupError } from './actions';
import { callAPI } from '../../services/api';
import { push } from 'react-router-redux';
// Individual exports for testing
export function* signupUserAsync(action) {
  console.log(action)
  try {
    const response = yield callAPI('POST', '/users', false, action.userObj);
    yield put(signupSucessful(response));
    yield put(push('/login'))
  } catch (error) {
    yield put(signupError(error));
  }
}

export default function* watchSignupUserAsync() {
  yield takeLatest(SIGNUP_REQUEST, signupUserAsync);
}
