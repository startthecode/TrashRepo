import { environment } from "@/app/const/environment";
import { AuthSession, serverAuthActions } from "@/app/types/Auth";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: serverAuthActions = {
  type: null,
};

let serverAuthActionSlice = createSlice({
  name: "AuthServerActionReducer",
  initialState,
  reducers: {
    setServerAuthActionType(_, payload: PayloadAction<serverAuthActions>) {
      console.log(payload);
      return payload.payload;
    },
  },
});

export const authServerActionReducer = serverAuthActionSlice.reducer;
export const { setServerAuthActionType } = serverAuthActionSlice.actions;
