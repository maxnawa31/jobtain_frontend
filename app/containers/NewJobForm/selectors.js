import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the newJobForm state domain
 */

const selectNewJobFormDomain = state => state.get('newJobForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NewJobForm
 */

const makeSelectNewJobForm = () =>
  createSelector(selectNewJobFormDomain, substate => substate.toJS());

export default makeSelectNewJobForm;
export { selectNewJobFormDomain };
