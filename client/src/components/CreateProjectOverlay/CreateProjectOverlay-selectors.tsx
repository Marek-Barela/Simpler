import { RootState } from "../../redux/root-reducer";

export const getProjectOverlayState = (state: RootState) => {
  return state.switchOverlay.createProjectOverlayIsOpen;
};
