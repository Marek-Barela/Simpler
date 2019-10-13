import { switchCreateProjectOverlay } from "./CreateProjectOverlay-actions";
import { getType } from "typesafe-actions";
import { RootAction } from "../../redux/root-actions";

interface CreateProjectOverlay {
  createProjectOverlayIsOpen: boolean;
}

const initialState: CreateProjectOverlay = {
  createProjectOverlayIsOpen: false
};

export default (
  state: CreateProjectOverlay = initialState,
  action: RootAction
): CreateProjectOverlay => {
  switch (action.type) {
    case getType(switchCreateProjectOverlay): {
      return {
        ...state,
        createProjectOverlayIsOpen: !action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
