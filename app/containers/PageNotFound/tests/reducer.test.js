import { fromJS } from 'immutable';
import pageNotFoundReducer from '../reducer';

describe('pageNotFoundReducer', () => {
  it('returns the initial state', () => {
    expect(pageNotFoundReducer(undefined, {})).toEqual(fromJS({}));
  });
});
