import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './constants';
import { callAPI } from '../../services/api';
import {setToken} from '../../services/token';
// Individual exports for testing
export function* attemptLogin(action) {
  console.log(action)
  try {
    const {email, password} = action;
    const response = yield callAPI(
      'POST',
      '/users/login',
      false,
      action.userObj,
    );
    yield setToken(response.token)
  } catch (error) {}
}

export default function* watchAttemptLogin() {
  yield takeLatest(LOGIN_REQUEST, attemptLogin);
}
