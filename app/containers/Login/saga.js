import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './constants';

// Individual exports for testing
export function* attemptLogin(email,password) {
  console.log('inside saga')
}

export default function* watchAttemptLogin() {
  yield takeLatest(LOGIN_REQUEST, attemptLogin)
}
