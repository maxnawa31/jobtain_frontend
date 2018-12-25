import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userHomePage state domain
 */

const selectUserHomePageDomain = state =>
  state.get('userHomePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserHomePage
 */

const makeSelectUserHomePage = () =>
  createSelector(selectUserHomePageDomain, substate => substate.toJS());

export default makeSelectUserHomePage;
export { selectUserHomePageDomain };
