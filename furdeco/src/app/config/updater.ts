"use client";
import { reduxStore } from "../store/reduxStore";
import { setServerAuthActionType } from "../store/reducers/session";
export const ddd =()=> reduxStore.dispatch(setServerAuthActionType({ type: "removeCookie" }));
