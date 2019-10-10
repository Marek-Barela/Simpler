import { setAlert, removeAlert } from "./Alert-actions";
import { getType } from "typesafe-actions";
import { RootAction } from "../../redux/root-actions";
import { Alert } from "./Alert-model";

const initialState: Alert[] = [];

export default (state: Alert[] = initialState, action: RootAction): Alert[] => {
  switch (action.type) {
    case getType(setAlert): {
      return action.payload;
    }
    case getType(removeAlert): {
      return state.filter(alert => alert.id !== action.payload);
    }
    default: {
      return [...state];
    }
  }
};
