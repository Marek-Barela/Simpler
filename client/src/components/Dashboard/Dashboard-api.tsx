import { ProjectsResponse, TasksResponse } from "./Dashboard-model";
import axios from "axios";

export const getProjectsFromDatabase = async (payload:string): Promise<ProjectsResponse> => {
  return await axios(`/api/projects/${payload}`).then(res => res.data);
};

export const getTasksFromDatabase = async (payload:string): Promise<TasksResponse> => {
  return await axios(`/api/tasks/${payload}`).then(res => res.data);
};
