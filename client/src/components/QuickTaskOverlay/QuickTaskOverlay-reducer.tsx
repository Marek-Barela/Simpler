import { switchCreateQuickTaskOverlay } from "./QuickTaskOverlay-actions";
import { getType } from "typesafe-actions";
import { RootAction } from "../../redux/root-actions";

interface CreateProjectOverlay {
  createQuickTaskOverlay: boolean;
}

const initialState: CreateProjectOverlay = {
  createQuickTaskOverlay: true
};

export default (
  state: CreateProjectOverlay = initialState,
  action: RootAction
): CreateProjectOverlay => {
  switch (action.type) {
    case getType(switchCreateQuickTaskOverlay): {
      return {
        ...state,
        createQuickTaskOverlay: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
