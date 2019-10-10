import { createAction, createAsyncAction } from "typesafe-actions";
import { RegisterUser, UserData } from "./register-model";

export const registerUser = createAction("register/REGISTER_USER", action => {
  return (payload: UserData) => action(payload);
});

export const registerUserRequest = createAsyncAction(
  "register/REGISTER_USER_REQUESTED",
  "register/REGISTER_USER_SUCCEEDED",
  "register/REGISTER_USER_FAILED"
)<undefined, RegisterUser, Error>();
