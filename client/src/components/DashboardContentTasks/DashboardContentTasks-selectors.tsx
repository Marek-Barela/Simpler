import { RootState } from "../../redux/root-reducer";
import { ActiveProjectState } from "./DashboardContentTasks-model";

export const getActiveProjectState = (state: RootState): ActiveProjectState => {
  return state.activeProject;
};
