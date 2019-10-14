import {
  fetchUserProjectsRequest,
  fetchUserTasksRequest,
  addNewProject
} from "./Dashboard-actions";
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
    case getType(addNewProject): {
      return {
        ...state,
        projects: [...newState.projects, action.payload]
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
