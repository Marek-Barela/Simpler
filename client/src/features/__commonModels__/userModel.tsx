import { UserResponse } from "../authorization/authorization-model";

export type User = {
  token?: string | null;
  isAuthenticated?: boolean | null;
  isFetching?: boolean;
  user?: UserResponse;
};
