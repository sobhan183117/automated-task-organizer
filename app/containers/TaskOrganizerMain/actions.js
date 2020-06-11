/*
 *
 * TaskOrganizerMain actions
 *
 */

import { DEFAULT_ACTION, SET_TASK_NAME, SET_TASK_DURATION, SET_TASK_LIST, SUBMIT_ADD_TASK, SUBMIT_EDIT_TASK, SUBMIT_DELETE_TASK, SET_MODAL_STATUS } from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function setTaskName(taskName) {
  console.log('taskNme', taskName);
  
  return {
    type: SET_TASK_NAME,
    taskName
  };
}

export function setTaskDuration(taskDuration) {
  console.log('taskDuration', taskDuration);

  return {
    type: SET_TASK_DURATION,
    taskDuration,
  };
}

export function setTaskList(taskList) {
  console.log('taskList', taskList);

  return {
    type: SET_TASK_LIST,
    taskList,
  };
}

export function setModalVisibleStatus() {
  return {
    type: SET_MODAL_STATUS,
  };
}

export function submitAdd() {
  return {
    type: SUBMIT_ADD_TASK,
  };
}

export function submitEdit() {
  return {
    type: SUBMIT_EDIT_TASK,
  };
}

export function submitDelete() {
  return {
    type: SUBMIT_DELETE_TASK,
  };
}