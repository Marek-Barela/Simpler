import * as api from "./DashboardSidebarDropdownListItemPopup-api";
import { deleteProject, deleteProjectRequest } from "./DashboardSidebarDropdownListItemPopup-actions";
import { all, call, put, Effect, takeEvery } from "redux-saga/effects";
import { getType } from "typesafe-actions";

export function* handleDeleteProject(id: Effect) {
  const { payload } = id;
  try {
    yield put(deleteProjectRequest.request());
    yield call(api.deleteProjectFromDatabase, payload);
    yield put(deleteProjectRequest.success(payload));
  } catch (err) {
    yield put(deleteProjectRequest.failure(err));
  }
}

export default function*() {
  yield all([takeEvery(getType(deleteProject), handleDeleteProject)]);
}
