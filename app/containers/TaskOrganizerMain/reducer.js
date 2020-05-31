/*
 *
 * TaskOrganizerMain reducer
 *
 */

import { fromJS } from "immutable";
import { DEFAULT_ACTION, SET_TASK_NAME, SET_TASK_DURATION } from "./constants";

export const initialState = fromJS({
  taskName: '',
  taskDuration: ''
});

function taskOrganizerMainReducer(state = initialState, action) {
  switch (action.type) {
  
    case DEFAULT_ACTION:
      return state;

    case SET_TASK_NAME:
      return state.set('taskName', action.taskName);

    case SET_TASK_DURATION:
      return state.set('taskDuration', action.taskDuration);

    default:
      return state;
  }
}

export default taskOrganizerMainReducer;
