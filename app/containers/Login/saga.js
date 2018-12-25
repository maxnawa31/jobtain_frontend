import {
  take,
  call,
  put,
  select,
  takeLatest,
  fork,
  cancelled,
} from 'redux-saga/effects';
import { LOGIN_REQUEST } from './constants';
import { callAPI } from '../../services/api';
import { push } from 'react-router-redux';
import { setClient } from '../Client/actions';
import { loginSuccessful, loginError } from './actions';
import { LOGIN_ERROR } from './constants';
import { CLIENT_SET, CLIENT_UNSET } from '../Client/constants';
import makeSelectLogin from './selectors';
import {setToken} from '../../services/token'
// Individual exports for testing
export function* attemptLogin(userObj) {
  try {
    const response = yield callAPI('POST', '/users/login', false, userObj);
    yield put(setClient(response));
    yield put(loginSuccessful());
    const client = yield select(makeSelectLogin());
    const { id, token } = client;
    yield setToken(token)
    yield put(push(`/users/${id}`));
  } catch (error) {
    yield put(loginError(error));
  }
}

export default function* watchAttemptLogin() {
  while (true) {
    const { userObj } = yield take(LOGIN_REQUEST);
    const task = yield fork(attemptLogin, userObj);
    const action = yield take([CLIENT_UNSET, LOGIN_ERROR]);
    if (action.type === CLIENT_UNSET) yield cancel(task);

    // yield call(logout)
  }
}
