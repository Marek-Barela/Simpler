import { fork } from "redux-saga/effects";
import authorization from "../features/authorization/authorization-saga";
import register from "../features/register/register-saga";
import login from "../features/login/login-saga";
import dashboard from "../components/Dashboard/Dashboard-saga";
import createProject from "../components/CreateProjectForm/CreateProjectForm-saga";
import deleteProject from "../components/DashboardSidebarDropdownListItemPopup/DashboardSidebarDropdownListItemPopup-saga";

export default function* rootSaga() {
  yield fork(authorization);
  yield fork(register);
  yield fork(login);
  yield fork(dashboard);
  yield fork(createProject);
  yield fork(deleteProject);
}
