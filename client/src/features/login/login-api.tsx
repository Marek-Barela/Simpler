import { LoginUser, UserData } from "./login-model";
import axios from "axios";

export const loginUserInApplication = async (
  payload: UserData
): Promise<LoginUser> => {
  const { email, password } = payload;
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  const body = JSON.stringify({ email, password });
  return await axios.post("/api/auth", body, config).then(res => res.data);
};
