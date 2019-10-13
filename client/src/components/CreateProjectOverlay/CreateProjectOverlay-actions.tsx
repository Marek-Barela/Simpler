import { createAction } from "typesafe-actions";

export const switchCreateProjectOverlay = createAction(
  "createProject/SWITCH_CRATE_PROJECT_OVERLAY",
  action => {
    return (payload: boolean) => action(payload);
  }
);
