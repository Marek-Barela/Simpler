import * as api from "./DashboardContentTasksItem-api";
import { deleteUserTask, deleteUserTaskRequest } from "./DashboardContentTasksItem-actions";
import { all, call, put, takeEvery, Effect } from "redux-saga/effects";
import { getType } from "typesafe-actions";

export function* handleDeleteTask(action: Effect) {
  const { payload } = action;
  try {
    yield put(deleteUserTaskRequest.request());
    yield call(api.deleteTaskFromDatabase, payload);
    yield put(deleteUserTaskRequest.success(payload));
  } catch (err) {
    yield put(deleteUserTaskRequest.failure(err));
  }
}

export default function*() {
  yield all([
    takeEvery(getType(deleteUserTask), handleDeleteTask)
  ]);
}
