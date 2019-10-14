import { createAction } from "typesafe-actions";

export const setActiveProject = createAction("content/SET_ACTIVE_PROJECT", action => {
  return (payload: any) => action(payload);
});