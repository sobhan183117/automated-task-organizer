import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the taskOrganizerMain state domain
 */

const selectTaskOrganizerMainDomain = state =>
  state.get("taskOrganizerMain", initialState);

/**
 * Other specific selectors
 */

const makeSelectTaskName = () =>
createSelector(selectTaskOrganizerMainDomain, substate => substate.get('taskName'));

const makeSelectTaskDuration = () =>
createSelector(selectTaskOrganizerMainDomain, substate => substate.get('taskDuration'));

const makeSelectModalVisibleStatus = () =>
createSelector(selectTaskOrganizerMainDomain, substate => substate.get('modalVisible'));

const makeSelectTaskList = () =>
createSelector(selectTaskOrganizerMainDomain, substate => substate.get('taskList'));

/**
 * Default selector used by TaskOrganizerMain
 */

const makeSelectTaskOrganizerMain = () =>
  createSelector(selectTaskOrganizerMainDomain, substate => substate.toJS());

export default makeSelectTaskOrganizerMain;
export { 
  selectTaskOrganizerMainDomain,
  makeSelectTaskName,
  makeSelectTaskDuration,
  makeSelectTaskList,
  makeSelectModalVisibleStatus,
};
