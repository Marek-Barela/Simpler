import * as api from "./Dashboard-api";
import {
  fetchUserProjects,
  fetchUserProjectsRequest,
  fetchUserTasks,
  fetchUserTasksRequest
} from "./Dashboard-actions";
import { ProjectsResponse, TasksResponse } from "./Dashboard-model";
import { all, call, put, takeLatest, Effect } from "redux-saga/effects";
import { getType } from "typesafe-actions";

export function* handleFetchUserProjects(action: Effect) {
  const { payload } = action;
  try {
    yield put(fetchUserProjectsRequest.request());
    const projectsResponse: ProjectsResponse[] = yield call(
      api.getProjectsFromDatabase,
      payload
    );
    yield put(fetchUserProjectsRequest.success(projectsResponse));
  } catch (err) {
    yield put(fetchUserProjectsRequest.failure(err));
  }
}

export function* handleFetchUserTasks(action: Effect) {
  const { payload } = action;
  try {
    yield put(fetchUserTasksRequest.request());
    const tasksResponse: TasksResponse[] = yield call(
      api.getTasksFromDatabase,
      payload
    );
    yield put(fetchUserTasksRequest.success(tasksResponse));
  } catch (err) {
    yield put(fetchUserTasksRequest.failure(err));
  }
}

export default function*() {
  yield all([
    takeLatest(getType(fetchUserProjects), handleFetchUserProjects),
    takeLatest(getType(fetchUserTasks), handleFetchUserTasks)
  ]);
}
