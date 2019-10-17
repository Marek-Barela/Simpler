import { switchMenuSidebar } from "./DashboardTopNavigationMenu-actions";
import { getType } from "typesafe-actions";
import { RootAction } from "../../redux/root-actions";

interface SidebarVisibility {
  sidebarIsActive: boolean;
}

const initialState: SidebarVisibility = {
  sidebarIsActive: true
};

export default (
  state: SidebarVisibility = initialState,
  action: RootAction
): SidebarVisibility => {
  switch (action.type) {
    case getType(switchMenuSidebar): {
      return {
        ...state,
        sidebarIsActive: !action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
