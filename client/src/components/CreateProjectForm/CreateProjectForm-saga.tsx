import * as api from "./CreateProjectForm-api";
import { createProject, createProjectRequest } from "./CreateProjectForm-actions";
import { addNewProject } from "../Dashboard/Dashboard-actions";
import { all, call, put, Effect, takeEvery } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { ProjectsResponse } from "../Dashboard/Dashboard-model";

export function* handleCreateProject(projectData: Effect) {
  const { payload } = projectData;
  try {
    yield put(createProjectRequest.request());
    const response: ProjectsResponse = yield call(api.createProjectInDatabase, payload);
    //console.log(response);
    yield put(addNewProject(response))
    yield put(createProjectRequest.success(response));
  } catch (err) {
    yield put(createProjectRequest.failure(err));
  }
}

export default function*() {
  yield all([takeEvery(getType(createProject), handleCreateProject)]);
}
