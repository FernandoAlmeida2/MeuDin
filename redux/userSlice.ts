import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  name: string;
  token: string;
};

const initialState: UserState = {
  name: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      return { ...state, name: action.payload };
    },
    changeToken(state, action: PayloadAction<string>) {
      return { ...state, token: action.payload };
    },
    logout() {
      return initialState;
    },
  },
});

export const { changeName, changeToken, logout } = userSlice.actions;
