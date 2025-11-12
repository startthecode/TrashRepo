"use server";

import { fetchForServer } from "@/app/config/axios";
import { authVar } from "@/app/const/globalVar";
import { employeServices } from "@/app/services/employeeServices";
import { cookies } from "next/headers";

export const getDashboardData = async <T>(): Promise<{
  data: T | any;
  error: string | null;
}> => {
  let cookieStore = await cookies();
  let userID = cookieStore.get(authVar.userID)?.value;
  if (!userID) return { data: null, error: "No user id found" };
  try {
    let response = await employeServices.getDashboardData(userID);
    return { data: response.data, error: null };
  } catch (err: any) {
   if (err?.digest?.startsWith("NEXT_REDIRECT")) throw err;
    return { data: null, error: err?.message || "something went wrong" };
  }
};
