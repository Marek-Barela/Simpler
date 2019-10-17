import { Dispatch as ReduxDispatch } from "redux";
import { ActionType } from "typesafe-actions";
import * as authorization from "../features/authorization/authorization-actions";
import * as register from "../features/register/register-actions";
import * as login from "../features/login/login-actions";
import * as alert from "../components/Alert/Alert-actions";
import * as dashboard from "../components/Dashboard/Dashboard-actions";
import * as switchOverlay from "../components/CreateProjectOverlay/CreateProjectOverlay-actions";
import * as createProject from "../components/CreateProjectForm/CreateProjectForm-actions";
import * as deleteProject from "../components/DashboardSidebarDropdownListItemPopup/DashboardSidebarDropdownListItemPopup-actions";
import * as activeProject from "../components/DashboardContentTasks/DashboardContentTasks-actions";
import * as createTask from "../components/DashboardContentTasksForm/DashboardContentTasksForm-actions";
import * as deleteTask from "../components/DashboardContentTasksItem/DashboardContentTasksItem-actions";
import * as editTask from "../components/DashboardContentTasksEdit/DashboardContentTasksEdit-actions";
import * as logout from "../components/DashboardTopNavigationSettings/DashboardTopNavigationSettings-action";
import * as quickTaskOverlay from "../components/QuickTaskOverlay/QuickTaskOverlay-actions";

export const actions = {
  authorization,
  register,
  login,
  alert,
  dashboard,
  switchOverlay,
  createProject,
  deleteProject,
  activeProject,
  createTask,
  deleteTask,
  editTask,
  logout,
  quickTaskOverlay
};

export type RootAction = ActionType<typeof actions>;
export type Dispatch = ReduxDispatch<RootAction>;
