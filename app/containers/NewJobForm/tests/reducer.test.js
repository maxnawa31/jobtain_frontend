import { fromJS } from 'immutable';
import newJobFormReducer from '../reducer';

describe('newJobFormReducer', () => {
  it('returns the initial state', () => {
    expect(newJobFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
