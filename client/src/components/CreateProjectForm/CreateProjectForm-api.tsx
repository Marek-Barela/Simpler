import axios from "axios";
import { CreateProjectData } from "./CreateProjectForm-model";
import { ProjectsResponse } from "../Dashboard/Dashboard-model";

export const createProjectInDatabase = async (
  payload: CreateProjectData
): Promise<ProjectsResponse> => {
  const { title, color } = payload;
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  const body = JSON.stringify({ title, color });
  return await axios.post("/api/projects", body, config).then(res => res.data);
};
