import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { ServiceResponse } from "./serviceResponse";

export type UserData = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export async function signUp(data: UserData) {
    console.log(data)
  const response = await axios.post<ServiceResponse<number>>(
    `${BASE_URL}/auth/signup`,
    data
  );
  return response.data;
}
