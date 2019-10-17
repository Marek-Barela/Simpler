import { createAction } from "typesafe-actions";

export const switchCreateQuickTaskOverlay = createAction(
  "quickTask/SWITCH_CRATE_QUICK_TASK_OVERLAY",
  action => {
    return (payload: boolean) => action(payload);
  }
);
