import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the pageNotFound state domain
 */

const selectPageNotFoundDomain = state =>
  state.get("pageNotFound", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageNotFound
 */

const makeSelectPageNotFound = () =>
  createSelector(selectPageNotFoundDomain, substate => substate.toJS());

export default makeSelectPageNotFound;
export { selectPageNotFoundDomain };
