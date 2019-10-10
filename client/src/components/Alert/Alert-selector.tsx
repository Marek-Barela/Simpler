import { RootState } from "../../redux/root-reducer";

export const getAlertMessages = (state: RootState) => {
  return state.alert;
};
