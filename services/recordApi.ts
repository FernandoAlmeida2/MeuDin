import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { ServiceResponse } from "./serviceResponse";

export type RecordType = {
  id: number;
  amount: number;
  description: string;
  type: "Income" | "Expense";
  createdAt: string;
};

type SaveRecordBody = Omit<RecordType, "id" | "createdAt">

export async function getRecords(token: string) {
  const response = await axios.get<ServiceResponse<RecordType[]>>(
    `${BASE_URL}/record/getAll`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function saveRecord(data: SaveRecordBody, token: string) {
  const response = await axios.post<ServiceResponse<number>>(
    `${BASE_URL}/record`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
