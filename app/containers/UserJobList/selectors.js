import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userJobList state domain
 */

const selectUserJobListDomain = state => state.get('userJobList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserJobList
 */

const makeSelectUserJobList = () =>
  createSelector(selectUserJobListDomain, substate => substate.toJS());

export default makeSelectUserJobList;
export { selectUserJobListDomain };
