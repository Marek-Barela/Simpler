import { RegisterUser, UserData } from "./register-model";
import axios from "axios";

export const registerUserInDatabase = async (payload: UserData): Promise<RegisterUser> => {
  const { name, email, password } = payload;
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  const body = JSON.stringify({ name, email, password });
  return await axios.post("/api/users", body, config).then(res => res.data);
};
