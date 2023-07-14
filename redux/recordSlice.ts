import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RecordState = {
  amount: number;
  description: string;
  type: "Income" | "Expense";
};

const initialState: RecordState = {
  amount: 0,
  description: "",
  type: "Income",
};

export const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    changeAmount(state, action: PayloadAction<number>) {
      return { ...state, amount: action.payload };
    },
    changeDescription(state, action: PayloadAction<string>) {
      return { ...state, description: action.payload };
    },
    changeType(state, action: PayloadAction<"Income" | "Expense">) {
      return { ...state, type: action.payload };
    },
  },
});

export const { changeAmount, changeDescription, changeType } = recordSlice.actions;
