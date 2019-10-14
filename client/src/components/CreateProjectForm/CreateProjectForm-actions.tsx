import { createAction, createAsyncAction } from "typesafe-actions";
import { CreateProjectData } from "./CreateProjectForm-model";

export const createProject = createAction(
  "project/CREATE_NEW_PROJECT",
  action => {
    return (payload: CreateProjectData) => action(payload);
  }
);

export const createProjectRequest = createAsyncAction(
  "project/CREATE_NEW_PROJECT_REQUESTED",
  "project/CREATE_NEW_PROJECT_SUCCEEDED",
  "project/CREATE_NEW_PROJECT_FAILED"
)<undefined, object, Error>();
