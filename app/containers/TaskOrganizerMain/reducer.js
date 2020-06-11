/*
 *
 * TaskOrganizerMain reducer
 *
 */

import { fromJS } from "immutable";
import {
  DEFAULT_ACTION, SET_TASK_NAME, SET_TASK_DURATION, SET_TASK_LIST,
  SET_MODAL_STATUS,
} from "./constants";

export const initialState = fromJS({
  taskName: '',
  taskDuration: '',
  taskList: [],
  modalVisible: false,
});

function taskOrganizerMainReducer(state = initialState, action) {
  switch (action.type) {

    case DEFAULT_ACTION:
      return state;

    case SET_TASK_NAME:
      return state.set('taskName', action.taskName);

    case SET_TASK_DURATION:
      return state.set('taskDuration', action.taskDuration);

    case SET_TASK_LIST:
      console.log('taskList', action.taskList);
      return state.set('taskList', action.taskList);

    case SET_MODAL_STATUS:

      let status = state.get('modalVisible')
      console.log('modalVisible', !status);
      return state.set('modalVisible', !status);

    default:
      return state;
  }
}

export default taskOrganizerMainReducer;
