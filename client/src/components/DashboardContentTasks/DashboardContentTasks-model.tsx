import { TasksResponse } from "../Dashboard/Dashboard-model";

export interface ActiveProjectState {
  projectTitle: string;
  projectTasks: TasksResponse[];
  activeProjectID: string;
}

export interface SetActiveProject {
  _id: string;
  title: string;
  tasks: TasksResponse[];
}

export interface GetProjectData {
  _id: string;
  title: string;
}
