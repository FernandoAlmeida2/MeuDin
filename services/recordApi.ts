import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { ServiceResponse } from "./serviceResponse";

export type RecordType = {
  id: number;
  amount: number;
  type: "Income" | "Expense";
  createdAt: string;
};

export async function getRecords(token: string) {
  const response = await axios.get<ServiceResponse<RecordType[]>>(`${BASE_URL}/record/getAll`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
