"use server";
import { cookies } from "next/headers";
export async function getCookiesForClient(): Promise<any[]> {
  let cookieStore = (await cookies()).getAll();
  (await cookies()).set("123", "12");
  return cookieStore;
}

export async function setCookieForClient(
  obj: Record<string, string>
): Promise<boolean> {
  let cookieStore = await cookies();
  try {
    let keys = Object.keys(obj);
    keys.forEach((val) => obj[val] && cookieStore.set(val, obj[val],{expires:new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}));
  } catch {
    throw Error("unable to save cookie");
  }
  return true;
}
export async function deleteCookieForClient(arr: string[]): Promise<boolean> {
  let cookieStore = await cookies();

  try {
    arr?.forEach((val) => cookieStore.delete(val));
  } catch {
    throw Error("unable to delete cookie");
  }
  return true;
}
export async function deleteAllCookieForClient(
  arr: string[]
): Promise<boolean> {
  let cookieStore = await cookies();
  try {
    cookieStore
      .getAll()
      .map((val) => Object.keys(val)[0])
      .forEach((val) => cookieStore.delete(val));
  } catch {
    throw Error("unable to delete cookie");
  }
  return true;
}
