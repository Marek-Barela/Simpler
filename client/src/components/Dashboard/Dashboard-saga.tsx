import * as api from "./Dashboard-api";
import { fetchUserProjects, fetchUserProjectsRequest } from "./Dashboard-actions";
import { ProjectsResponse } from "./Dashboard-model";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";

export function* handleFetchUserProjects(action: any) {
  const { payload } = action;
  try {
    yield put(fetchUserProjectsRequest.request());
    const response: ProjectsResponse = yield call(api.getProjectsFromDatabase, payload);
    yield put(fetchUserProjectsRequest.success(response));
  } catch (err) {
    yield put(fetchUserProjectsRequest.failure(err));
  }
}

export default function*() {
  yield all([takeLatest(getType(fetchUserProjects), handleFetchUserProjects)]);
}