import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the editJobForm state domain
 */

const selectEditJobFormDomain = state => state.get('editJobForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EditJobForm
 */

const makeSelectEditJobForm = () =>
  createSelector(selectEditJobFormDomain, substate => substate.toJS());

export default makeSelectEditJobForm;
export { selectEditJobFormDomain };
