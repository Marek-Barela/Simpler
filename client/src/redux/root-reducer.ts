import { combineReducers } from "redux";
import { RootAction } from "./root-actions";
import userData from "../features/__commonReducers__/userDataReducer";
import alert from "../components/Alert/Alert-reducer";
import dashboard from "../components/Dashboard/Dashboard-reducer";

const reducerMap = {
  userData,
  alert,
  dashboard
};

export type RootState = {
  [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);
