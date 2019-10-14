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
  const newState = { ...state };
  switch (action.type) {
    /**case getType(setActiveProject): {
      return {
        ...state
      };
    } **/
    default: {
      return {
        ...state
      };
    }
  }
}
