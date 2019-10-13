import { RootState } from "../redux/root-reducer";

export const getUserData = (state: RootState) => {
  return state.userData;
};

export const getUserDetails = (state: RootState) => {
  return state.userData.user;
};
