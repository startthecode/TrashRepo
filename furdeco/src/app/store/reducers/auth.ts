import { environment } from "@/app/const/environment";
import { AuthSession } from "@/app/types/Auth";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: AuthSession = {
  userid: null,
  accessToken: null,
  refreshToken: null,
};

let authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    createLoginSession(currentS, d: PayloadAction<AuthSession>) {
      let { userid, accessToken, refreshToken } = d.payload;
      return d.payload;
    },
    deleteLoginSession(currentS, d: PayloadAction<AuthSession>) {
      return initialState;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { createLoginSession, deleteLoginSession } = authSlice.actions;
