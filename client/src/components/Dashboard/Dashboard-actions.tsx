import { createAction, createAsyncAction } from "typesafe-actions";
import { ProjectsResponse } from "./Dashboard-model";

export const fetchUserProjects = createAction("dashboard/FETCH_USER_PROJECTS", action => {
  return (payload: string) => action(payload);
});

export const fetchUserProjectsRequest = createAsyncAction(
  "dashboard/FETCH_USER_PROJECTS_REQUESTED",
  "dashboard/FETCH_USER_PROJECTS_SUCCEEDED",
  "dashboard/FETCH_USER_PROJECTS_FAILED"
)<undefined, ProjectsResponse, Error>();
