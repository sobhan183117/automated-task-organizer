/*
 *
 * TaskOrganizerMain actions
 *
 */

import { DEFAULT_ACTION, SET_TASK_NAME, SET_TASK_DURATION } from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function setTaskName(taskName) {
  return {
    type: SET_TASK_NAME,
    taskName
  };
}

export function setTaskDuration(taskDuration) {
  return {
    type: SET_TASK_DURATION,
    taskDuration,
  };
}
