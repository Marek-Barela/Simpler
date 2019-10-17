import { RootState } from "../../redux/root-reducer";

export const getSidebarMenu = (state: RootState) => {
  return state.sidebarMenu.sidebarIsActive;
};
