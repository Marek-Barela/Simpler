import { loadUserRequest } from "../authorization/authorization-actions";
import { loginUserRequest } from "../login/login-actions";
import { registerUserRequest } from "../register/register-actions";
import { getType } from "typesafe-actions";
import { RootAction } from "../../redux/root-actions";
import { User } from "../__commonModels__/userModel";

const initialState: User = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isFetching: true,
  user: { _id: null }
};

export default function(state: User = initialState, action: RootAction): User {
  switch (action.type) {
    case getType(loadUserRequest.request):
    case getType(loginUserRequest.request):
    case getType(registerUserRequest.request): {
      return {
        ...state,
        isFetching: true
      };
    }
    case getType(loadUserRequest.success): {
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
        user: action.payload
      };
    }
    case getType(loginUserRequest.success):
    case getType(registerUserRequest.success): {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isFetching: false
      };
    }
    case getType(loadUserRequest.failure):
    case getType(loginUserRequest.failure):
    case getType(registerUserRequest.failure): {
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isFetching: false,
        user: { _id: null }
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
