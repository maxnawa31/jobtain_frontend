import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './constants';
import { callAPI } from '../../services/api';
import {setToken} from '../../services/token';
// Individual exports for testing
export function* attemptLogin(userObj) {
  try {
    const response = yield callAPI(
      'POST',
      '/users/login',
      false,
      userObj,
    );
    yield setToken(response.token)
  } catch (error) {}
}

export default function* watchAttemptLogin() {
  while(true) {
    const {userObj} = yield take(LOGIN_REQUEST);
    const task = yield fork(attemptLogin,userObj)
  }

}
