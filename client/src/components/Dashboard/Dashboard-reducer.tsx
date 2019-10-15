import {
  fetchUserProjectsRequest,
  fetchUserTasksRequest
} from "./Dashboard-actions";
import { createProjectRequest } from "../CreateProjectForm/CreateProjectForm-actions";
import { deleteProjectRequest } from "../DashboardSidebarDropdownListItemPopup/DashboardSidebarDropdownListItemPopup-actions";
import { createTaskRequest } from "../DashboardContentTasksForm/DashboardContentTasksForm-actions";
import { deleteUserTaskRequest } from "../DashboardContentTasksItem/DashboardContentTasksItem-actions";
import { ProjectsResponse, TasksResponse } from "./Dashboard-model";
import { getType } from "typesafe-actions";
import { RootAction } from "../../redux/root-actions";

export interface DashboardState {
  isFetching: boolean;
  projects: ProjectsResponse[];
  tasks: TasksResponse[];
}

const initialState: DashboardState = {
  isFetching: false,
  projects: [],
  tasks: []
};

export default function(
  state: DashboardState = initialState,
  action: RootAction
): DashboardState {
  const newState = { ...state };
  switch (action.type) {
    case getType(fetchUserTasksRequest.request):
    case getType(fetchUserProjectsRequest.request): {
      return {
        ...state,
        isFetching: true
      };
    }
    case getType(fetchUserProjectsRequest.success): {
      return {
        ...state,
        projects: action.payload,
        isFetching: false
      };
    }
    case getType(fetchUserTasksRequest.success): {
      return {
        ...state,
        tasks: action.payload,
        isFetching: false
      };
    }
    case getType(fetchUserTasksRequest.failure):
    case getType(fetchUserProjectsRequest.failure): {
      return {
        ...state,
        isFetching: false
      };
    }
    case getType(createProjectRequest.success): {
      return {
        ...state,
        projects: [...newState.projects, action.payload]
      };
    }
    case getType(deleteProjectRequest.success): {
      const filtredProjects = newState.projects.filter(project => {
        return project._id !== action.payload;
      });
      return {
        ...state,
        projects: filtredProjects
      };
    }
    case getType(createTaskRequest.success): {
      return {
        ...state,
        tasks: [...newState.tasks, action.payload]
      };
    }
    case getType(deleteUserTaskRequest.success): {
      const filtredTasks = newState.tasks.filter(
        (task: any) => task._id !== action.payload
      );
      return {
        ...state,
        tasks: filtredTasks
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
