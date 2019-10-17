import { RootState } from "../../redux/root-reducer";

export const getQuickTaskOverlayState = (state: RootState) => {
  return state.quickTaskOverlay.createQuickTaskOverlay;
};
