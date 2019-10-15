import * as api from "./DashboardContentTasksForm-api";
import { createTask, createTaskRequest } from "./DashboardContentTasksForm-actions";
import { all, call, put, Effect, takeEvery } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { TasksResponse } from "../Dashboard/Dashboard-model";

export function* handleCreateTask(taskData: Effect) {
  const { payload } = taskData;
  try {
    yield put(createTaskRequest.request());
    const response: TasksResponse = yield call(api.createTaskInDatabase, payload);
    yield put(createTaskRequest.success(response));
  } catch (err) {
    yield put(createTaskRequest.failure(err));
  }
}

export default function*() {
  yield all([takeEvery(getType(createTask), handleCreateTask)]);
}
