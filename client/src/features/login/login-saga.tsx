import * as api from "./login-api";
import { loginUser, loginUserRequest } from "./login-actions";
import { loadUser } from "../authorization/authorization-actions";
import { setAlert, removeAlert } from "../../components/Alert/Alert-actions";
import { all, call, put, takeLatest, delay, Effect } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { LoginUser } from "./login-model";
import uuid from "uuid";

interface Errors {
  msg: "string";
}

export function* handleLoginUser(loginData: Effect) {
  const { payload } = loginData;
  try {
    yield put(loginUserRequest.request());
    const response: LoginUser = yield call(api.loginUserInApplication, payload);
    yield put(loginUserRequest.success(response));
    yield put(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    const errorId = uuid.v4();
    const errorItems = errors.map((error: Errors) => {
      return {
        msg: error.msg,
        id: errorId
      };
    });
    yield put(loginUserRequest.failure(err));
    yield put(setAlert(errorItems));
    yield delay(4000);
    yield put(removeAlert(errorId));
  }
}

export default function*() {
  yield all([takeLatest(getType(loginUser), handleLoginUser)]);
}
