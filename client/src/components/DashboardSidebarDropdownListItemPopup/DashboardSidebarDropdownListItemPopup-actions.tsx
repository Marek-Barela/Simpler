import { createAction, createAsyncAction } from "typesafe-actions";

export const deleteProject = createAction("project/DELETE_PROJECT", action => {
  return (payload: string) => action(payload);
});

export const deleteProjectRequest = createAsyncAction(
  "project/DELETE_PROJECT_REQUESTED",
  "project/DELETE_PROJECT_SUCCEEDED",
  "project/DELETE_PROJECT_FAILED"
)<undefined, string, Error>();
