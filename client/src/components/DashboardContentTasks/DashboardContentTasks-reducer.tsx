import { setActiveProject } from "./DashboardContentTasks-actions";
import { createTaskRequest } from "../DashboardContentTasksForm/DashboardContentTasksForm-actions";
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
      return {
        ...state,
        projectTitle: title,
        projectTasks: tasks,
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
