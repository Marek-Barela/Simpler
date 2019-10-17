import axios from "axios";
import { EditTaskData } from "./DashboardContentTasksEdit-model";
import { TasksResponse } from "../Dashboard/Dashboard-model";

export const createTaskInDatabase = async (
  payload: EditTaskData
): Promise<TasksResponse> => {
  const { _id, description } = payload;
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  const body = JSON.stringify({ description });
  return await axios
    .put(`/api/tasks/${_id}`, body, config)
    .then(res => res.data);
};
