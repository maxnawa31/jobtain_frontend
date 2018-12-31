import {
  take,
  call,
  put,
  select,
  takeLatest,
  fork,
  cancelled,
  takeEvery
} from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESSFUL } from './constants';
import { callAPI } from '../../services/api';
import { push } from 'react-router-redux';
import { setClient } from '../Client/actions';
import { loginSuccessful, loginError } from './actions';
import { LOGIN_ERROR } from './constants';
import { CLIENT_SET, CLIENT_UNSET } from '../Client/constants';
import makeSelectLogin from './selectors';
import { setToken, setId, getId } from '../../services/token';

// Individual exports for testing
export function* attemptLogin(action) {
  const { userObj } = action;
  try {
    const response = yield callAPI('POST', '/users/login', false, userObj);
    yield put({type:LOGIN_SUCCESSFUL});
    const { token, id } = response;
    yield setToken(token);
    yield setId(id);
    yield put(push(`/users/${id}`));
  } catch (error) {
    console.log(error)
    yield put(loginError(error.message));
  }
}

export default function* watchAttemptLogin() {
  yield takeEvery(LOGIN_REQUEST, attemptLogin);
}
