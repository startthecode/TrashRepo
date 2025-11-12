import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";
import { authServerActionReducer } from "./reducers/session";

export const reduxStore = configureStore({
  reducer: {
    authReducer,
    authServerActionReducer,
  },
});

export const getAuthServerActionReducer = (
  val: ReturnType<typeof reduxStore.getState>
) => val.authServerActionReducer;
