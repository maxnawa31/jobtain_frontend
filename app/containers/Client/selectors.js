import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the client state domain
 */

const selectClientDomain = state => state.get('client', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Client
 */

const makeSelectClient = () =>
  createSelector(selectClientDomain, substate => substate.toJS());

export default makeSelectClient;
export { selectClientDomain };
