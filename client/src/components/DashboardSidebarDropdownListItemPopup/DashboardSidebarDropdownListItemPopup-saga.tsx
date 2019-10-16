import * as api from "./DashboardSidebarDropdownListItemPopup-api";
import {
  deleteProject,
  deleteProjectRequest
} from "./DashboardSidebarDropdownListItemPopup-actions";
import { getProjectData } from "../DashboardContentTasks/DashboardContentTasks-actions";
import { all, call, put, Effect, takeEvery, select } from "redux-saga/effects";
import { getType } from "typesafe-actions";

export function* handleDeleteProject(id: Effect) {
  const { payload } = id;
  const state = yield select();
  try {
    yield put(deleteProjectRequest.request());
    yield call(api.deleteProjectFromDatabase, payload);
    yield put(deleteProjectRequest.success(payload));
    if (state.activeProject.activeProjectID === payload) {
      // Redirect to inbox if deleted project id is same as selected project id
      yield put(getProjectData({ _id: "inbox", title: "Inbox" }));
    }
  } catch (err) {
    yield put(deleteProjectRequest.failure(err));
  }
}

export default function*() {
  yield all([takeEvery(getType(deleteProject), handleDeleteProject)]);
}
