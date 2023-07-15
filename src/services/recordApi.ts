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

type SaveRecordBody = Omit<RecordType, "id" | "createdAt">;
type UpdateRecordBody = { amount: number; description: string };

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

export async function deleteRecord(id: number, token: string) {
  const response = await axios.delete<ServiceResponse<string>>(
    `${BASE_URL}/record/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function updateRecord(id: number, data: UpdateRecordBody, token: string) {
  const response = await axios.patch<ServiceResponse<string>>(
    `${BASE_URL}/record/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
