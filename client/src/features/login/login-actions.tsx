import { createAction, createAsyncAction } from "typesafe-actions";
import { LoginUser, UserData } from "./login-model";

export const loginUser = createAction("login/LOGIN_USER", action => {
  return (payload: UserData) => action(payload);
});

export const loginUserRequest = createAsyncAction(
  "login/LOGIN_USER_REQUESTED",
  "login/LOGIN_USER_SUCCEEDED",
  "login/LOGIN_USER_FAILED"
)<undefined, LoginUser, Error>();
