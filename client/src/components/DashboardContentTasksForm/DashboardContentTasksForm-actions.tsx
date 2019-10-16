import { createAction, createAsyncAction } from "typesafe-actions";
import { CreateTaskData } from "./DashboardContentTasksForm-model";
import { TasksResponse } from "../Dashboard/Dashboard-model";

export const createTask = createAction("task/CREATE_NEW_TASK", action => {
  return (payload: CreateTaskData) => action(payload);
});

export const createTaskRequest = createAsyncAction(
  "task/CREATE_NEW_TASK_REQUESTED",
  "task/CREATE_NEW_TASK_SUCCEEDED",
  "task/CREATE_NEW_TASK_FAILED"
)<undefined, TasksResponse, Error>();
