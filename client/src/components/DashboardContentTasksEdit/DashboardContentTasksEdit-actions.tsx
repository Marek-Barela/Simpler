import { createAction, createAsyncAction } from "typesafe-actions";
import { EditTaskData } from "./DashboardContentTasksEdit-model";
import { TasksResponse } from "../Dashboard/Dashboard-model";

export const editTask = createAction("task/EDIT_TASK", action => {
  return (payload: EditTaskData) => action(payload);
});

export const editTaskRequest = createAsyncAction(
  "task/EDIT_TASK_REQUESTED",
  "task/EDIT_TASK_SUCCEEDED",
  "task/EDIT_TASK_FAILED"
)<undefined, TasksResponse, Error>();
