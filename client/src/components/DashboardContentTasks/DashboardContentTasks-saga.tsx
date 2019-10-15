import {
  getProjectData,
  setActiveProject
} from "./DashboardContentTasks-actions";
import { getType } from "typesafe-actions";
import { all, takeEvery, select, Effect, put } from "redux-saga/effects";

export function* handleSetActiveProject(action: Effect) {
  const { payload } = action;
  const state = yield select();
  const tasks = state.dashboard.tasks;
  const data = { tasks, ...payload };
  yield put(setActiveProject(data));
}

export default function*() {
  yield all([takeEvery(getType(getProjectData), handleSetActiveProject)]);
}
