import axios from "axios";
import { CreateTaskData } from "./DashboardContentTasksForm-model";
import { TasksResponse } from "../Dashboard/Dashboard-model";

export const createTaskInDatabase = async (
  payload: CreateTaskData
): Promise<TasksResponse> => {
  const { description, projectID } = payload;
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  const body = JSON.stringify({ description, projectID });
  return await axios.post("/api/tasks", body, config).then(res => res.data);
};
