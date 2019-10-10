import { fork } from "redux-saga/effects";
import authorization from "../features/authorization/authorization-saga";
import register from "../features/register/register-saga";
import login from "../features/login/login-saga";

export default function* rootSaga() {
  yield fork(authorization);
  yield fork(register);
  yield fork(login);
}
