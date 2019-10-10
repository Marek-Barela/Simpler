import { createAction } from "typesafe-actions";

export const setAlert = createAction("alert/SET_ALERT", action => {
  return (payload: []) => action(payload);
});

export const removeAlert = createAction("alert/REMOVE_ALERT", action => {
  return (payload: string) => action(payload);
});
