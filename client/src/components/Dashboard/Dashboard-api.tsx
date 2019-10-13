import { ProjectsResponse } from "./Dashboard-model";
import axios from "axios";

export const getProjectsFromDatabase = async (payload:string): Promise<ProjectsResponse> => {
  return await axios(`/api/projects/${payload}`).then(res => res.data);
};
