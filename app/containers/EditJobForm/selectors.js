import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the editJobForm state domain
 */

// const selectEditJobFormDomain = state => state.get('userJobList', initialState);

function selectEditJobFormDomain(state) {
  return state.get('userJobList', initialState);
}
/**
 * Other specific selectors
 */

/**
 * Default selector used by EditJobForm
 */

function getJobs(state, props) {
  const jobs = state.get('userJobList').get('jobs');
  const { id } = props;
  return jobs.filter(job => job['id'] === id);
}

const makeSelectEditJobForm = id => createSelector([getJobs], job => job);

export default makeSelectEditJobForm;
export { selectEditJobFormDomain };
