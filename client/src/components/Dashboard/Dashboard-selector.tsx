import { RootState } from "../../redux/root-reducer";
import { DashboardState } from "./Dashboard-reducer";

export const getUserDashboardData = (state: RootState): DashboardState => {
  return state.dashboard;
};
