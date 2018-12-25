import { fromJS } from 'immutable';
import userHomePageReducer from '../reducer';

describe('userHomePageReducer', () => {
  it('returns the initial state', () => {
    expect(userHomePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
