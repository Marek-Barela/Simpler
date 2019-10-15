import { createAction, createAsyncAction } from "typesafe-actions";
import { TasksResponse } from "../Dashboard/Dashboard-model";

export const deleteUserTask = createAction("task/DELETE_USER_TASK", action => {
  return (payload: string) => action(payload);
});

export const deleteUserTaskRequest = createAsyncAction(
  "task/DELETE_USER_TASK_REQUESTED",
  "task/DELETE_USER_TASK_SUCCEEDED",
  "task/DELETE_USER_TASK_FAILED"
)<undefined, TasksResponse, Error>();
