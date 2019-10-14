import { createAction, createAsyncAction } from "typesafe-actions";
import { ProjectsResponse, TasksResponse } from "./Dashboard-model";

export const fetchUserProjects = createAction("dashboard/FETCH_USER_PROJECTS", action => {
  return (payload: string) => action(payload);
});

export const fetchUserTasks = createAction("dashboard/FETCH_USER_TASKS", action => {
  return (payload: string) => action(payload);
});

export const fetchUserProjectsRequest = createAsyncAction(
  "dashboard/FETCH_USER_PROJECTS_REQUESTED",
  "dashboard/FETCH_USER_PROJECTS_SUCCEEDED",
  "dashboard/FETCH_USER_PROJECTS_FAILED"
)<undefined, ProjectsResponse[], Error>();

export const fetchUserTasksRequest = createAsyncAction(
  "dashboard/FETCH_USER_TASKS_REQUESTED",
  "dashboard/FETCH_USER_TASKS_SUCCEEDED",
  "dashboard/FETCH_USER_TASKS_FAILED"
)<undefined, TasksResponse[], Error>();

export const addNewProject = createAction("dashboard/ADD_NEW_PROJECT", action => {
  return (payload: ProjectsResponse) => action(payload);
})