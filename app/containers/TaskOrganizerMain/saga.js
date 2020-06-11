import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectTaskName, makeSelectTaskDuration, makeSelectTaskList } from './selectors';
import { setTaskList } from './actions';
import { SUBMIT_ADD_TASK } from './constants';

export function* addNewTask() {

  console.log('task-add-call');

  let previousTaskArr = [];
  previousTaskArr = yield select(makeSelectTaskList());
  console.log('previousTaskArr', previousTaskArr);

  if (!previousTaskArr.length) {

    let newTaskArray = [];
    newTaskArray.push({
      taskId: 1,
      taskName: yield select(makeSelectTaskName()),
      taskDuration: yield select(makeSelectTaskDuration())
    });
    yield put(setTaskList(newTaskArray));
    console.log('newTaskArray', newTaskArray);
  } else {

    let newTaskObj = {
      taskName: yield select(makeSelectTaskName()),
      taskDuration: yield select(makeSelectTaskDuration())
    }
    console.log('newTaskObj', newTaskObj);
  }

  // Array.prototype.push.apply(previousTaskArr, newTaskObj);
  // previousTaskArr.push(newTaskObj);
  // yield put(setTaskList(previousTaskArr));

}

export default function* taskOrganizerMainSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SUBMIT_ADD_TASK, addNewTask);
}
