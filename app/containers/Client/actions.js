/*
 *
 * Client actions
 *
 */

import { DEFAULT_ACTION, CLIENT_SET, CLIENT_UNSET } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setClient(userObj) {
  const { id, token } = userObj;
  return {
    type: CLIENT_SET,
    userObj,
  };
}

export function unsetClient() {
  return {
    type: CLIENT_UNSET,
  };
}
