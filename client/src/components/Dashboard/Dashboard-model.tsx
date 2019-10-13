export interface ProjectsResponse {
  _id?: string;
  title?: string;
  date?: Date;
  user?: string;
}

export interface TasksResponse {
  _id?: string;
  description?: string;
  date?: Date;
  user?: string;
  projectID: string;
}
