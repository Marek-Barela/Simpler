import { setActiveProject } from "./DashboardContentTasks-actions";
import { createTaskRequest } from "../DashboardContentTasksForm/DashboardContentTasksForm-actions";
import { TasksResponse } from "../Dashboard/Dashboard-model";
import { getType } from "typesafe-actions";
import { RootAction } from "../../redux/root-actions";
import { ActiveProjectState } from "./DashboardContentTasks-model";

const initialState: ActiveProjectState = {
  projectTitle: "Inbox",
  projectTasks: [],
  activeProjectID: "inbox"
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
      return {
        ...state,
        projectTasks: [...newState.projectTasks, action.payload]
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
