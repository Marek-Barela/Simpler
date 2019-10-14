import { TasksResponse } from "../Dashboard/Dashboard-model";

export interface ActiveProjectState {
  projectTitle: string;
  projectTasks: TasksResponse[];
  activeProjectID: string;
}
