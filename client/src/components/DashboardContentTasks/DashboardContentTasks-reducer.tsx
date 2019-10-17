import { setActiveProject } from "./DashboardContentTasks-actions";
import { createTaskRequest } from "../DashboardContentTasksForm/DashboardContentTasksForm-actions";
import { deleteUserTaskRequest } from "../DashboardContentTasksItem/DashboardContentTasksItem-actions";
import { TasksResponse } from "../Dashboard/Dashboard-model";
import { getType } from "typesafe-actions";
import { RootAction } from "../../redux/root-actions";
import { ActiveProjectState } from "./DashboardContentTasks-model";

const initialState: ActiveProjectState = {
  projectTitle: "",
  projectTasks: [],
  activeProjectID: ""
};

export default function(
  state: ActiveProjectState = initialState,
  action: RootAction
): ActiveProjectState {
  const newState = { ...state };
  switch (action.type) {
    case getType(setActiveProject): {
      const { _id, tasks, title } = action.payload;
      const filtredTasks = tasks.filter((task: TasksResponse) => {
        return task.projectID === _id;
      });
      return {
        ...state,
        projectTitle: title,
        projectTasks: filtredTasks,
        activeProjectID: _id
      };
    }
    case getType(createTaskRequest.success): {
      if (action.payload.projectID !== newState.activeProjectID) {
        return { ...state };
      }
      return {
        ...state,
        projectTasks: [...newState.projectTasks, action.payload]
      };
    }
    case getType(deleteUserTaskRequest.success): {
      const filtredTasks = newState.projectTasks.filter(
        (task: any) => task._id !== action.payload
      );
      return {
        ...state,
        projectTasks: filtredTasks
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
