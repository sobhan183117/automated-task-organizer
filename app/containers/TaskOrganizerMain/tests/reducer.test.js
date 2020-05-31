import { fromJS } from 'immutable';
import taskOrganizerMainReducer from '../reducer';

describe('taskOrganizerMainReducer', () => {
  it('returns the initial state', () => {
    expect(taskOrganizerMainReducer(undefined, {})).toEqual(fromJS({}));
  });
});
