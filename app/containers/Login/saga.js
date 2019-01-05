import { put, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESSFUL } from './constants';
import { callAPI } from '../../services/api';
import { push } from 'react-router-redux';

import { loginError } from './actions';

import { setToken, setId, getId } from '../../services/token';

// Individual exports for testing
export function* attemptLogin(action) {
  const { userObj } = action;
  try {
    const response = yield callAPI('POST', '/users/login', false, userObj);
    yield put({ type: LOGIN_SUCCESSFUL });
    const { token, id } = response;
    yield setToken(token);
    yield setId(id);
    yield put(push(`/users/${id}`));
  } catch (error) {
    yield put(loginError(error.message));
  }
}

export default function* watchAttemptLogin() {
  yield takeEvery(LOGIN_REQUEST, attemptLogin);
}
