import * as api from "./DashboardContentTasksEdit-api";
import { editTask, editTaskRequest } from "./DashboardContentTasksEdit-actions";
import { all, call, put, Effect, takeEvery } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { TasksResponse } from "../Dashboard/Dashboard-model";

export function* handleEditTask(taskData: Effect) {
  const { payload } = taskData;
  try {
    yield put(editTaskRequest.request());
    const response: TasksResponse = yield call(api.createTaskInDatabase, payload);
    yield put(editTaskRequest.success(response));
  } catch (err) {
    yield put(editTaskRequest.failure(err));
  }
}

export default function*() {
  yield all([takeEvery(getType(editTask), handleEditTask)]);
}
