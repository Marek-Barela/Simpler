import axios from "axios";
import { TasksResponse } from "../Dashboard/Dashboard-model";

export const deleteTaskFromDatabase = async (
  payload: string
): Promise<TasksResponse> => {
  return await axios.delete(`/api/tasks/${payload}`).then(res => res.data);
};
