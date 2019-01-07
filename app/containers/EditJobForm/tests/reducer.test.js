import { fromJS } from 'immutable';
import editJobFormReducer from '../reducer';

describe('editJobFormReducer', () => {
  it('returns the initial state', () => {
    expect(editJobFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
