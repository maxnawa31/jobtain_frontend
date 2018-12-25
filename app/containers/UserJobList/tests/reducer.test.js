import { fromJS } from 'immutable';
import userJobListReducer from '../reducer';

describe('userJobListReducer', () => {
  it('returns the initial state', () => {
    expect(userJobListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
