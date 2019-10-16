import { createAction } from "typesafe-actions";
import { SetActiveProject, GetProjectData } from "./DashboardContentTasks-model";

export const getProjectData = createAction("content/GET_PROJECT_DATA", action => {
  return (payload: GetProjectData) => action(payload);
});

export const setActiveProject = createAction("content/SET_ACTIVE_PROJECT", action => {
  return (payload: SetActiveProject) => action(payload);
});