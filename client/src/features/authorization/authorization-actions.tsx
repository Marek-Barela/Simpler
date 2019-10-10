import { createAction, createAsyncAction } from "typesafe-actions";

export const loadUser = createAction("authorization/LOAD_USER");

export const loadUserRequest = createAsyncAction(
  "authorization/LOAD_USER_REQUESTED",
  "authorization/LOAD_USER_SUCCEEDED",
  "authorization/LOAD_USER_FAILED"
)<undefined, object, Error>();
