import { setActiveProject } from "./DashboardContentTasks-actions";
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
    default: {
      return {
        ...state
      };
    }
  }
}
