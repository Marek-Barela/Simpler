import * as api from "./register-api";
import { registerUser, registerUserRequest } from "./register-actions";
import { loadUser } from "../authorization/authorization-actions";
import { setAlert, removeAlert } from "../../components/Alert/Alert-actions";
import { all, call, put, takeLatest, delay, Effect } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { RegisterUser } from "./register-model";
import uuid from "uuid";

interface Errors {
  msg: "string";
}

export function* handleRegisterUser(registrationData: Effect) {
  const { payload } = registrationData;
  try {
    yield put(registerUserRequest.request());
    const response: RegisterUser = yield call(
      api.registerUserInDatabase,
      payload
    );
    yield put(registerUserRequest.success(response));
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
    yield put(registerUserRequest.failure(err));
    yield put(setAlert(errorItems));
    yield delay(4000);
    yield put(removeAlert(errorId));
  }
}

export default function*() {
  yield all([takeLatest(getType(registerUser), handleRegisterUser)]);
}
