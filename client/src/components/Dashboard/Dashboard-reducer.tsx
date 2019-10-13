import { fetchUserProjectsRequest } from "./Dashboard-actions";
import { ProjectsResponse } from "./Dashboard-model";
import { getType } from "typesafe-actions";
import { RootAction } from "../../redux/root-actions";

const initialState: ProjectsResponse = {};

export default function(state = initialState, action: RootAction) {
  switch (action.type) {
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
    case getType(fetchUserProjectsRequest.failure): {
      return {
        ...state,
        isFetching: false
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
