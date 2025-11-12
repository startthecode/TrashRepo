"use server";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { cookies, headers } from "next/headers";
import { environment } from "../const/environment";
import { setCookieForClient } from "../_utils/cookieForClient";
import { authVar } from "../const/globalVar";
import { redirect } from "next/navigation";

export async function fetchForServer(config: AxiosRequestConfig) {
  const cookieStore = await cookies();
  const header = await headers();
  const returnedpath =
    header.get("x-invoke-path") ||
    header.get("x-url") ||
    header.get("referer") ||
    "/";
  const accessToken = cookieStore
    .getAll()
    .find((val) => val.name === authVar.accessToken)?.value;

  const refreshToken = cookieStore
    .getAll()
    .find((val) => val.name === authVar.refreshToken)?.value;

  // 🔹 No accessToken but refreshToken exists → redirect to refresh
  if (!accessToken && refreshToken) {
    redirect(`/refresh`);
  }
  try {
    const response = await axios({
      ...config,
      baseURL: environment.serverURL,
      withCredentials: true,
      headers: {
        ...config.headers,
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
      timeout: config.timeout || 10000,
    });

    return response.data;
  } catch (error: any) {
    const status = error?.response?.status;

    if (status == 401) {
      console.log("im in", accessToken, "---");
      return redirect(`/refresh?redirected=${returnedpath}`);
    }

    throw error;
  }
}

export async function fetchForClient<T>(config: AxiosRequestConfig) {
  let cookieStore = await cookies();
  let accessToken = cookieStore
    .getAll()
    .find((val) => val.name == authVar.accessToken)?.value;
  let refreshToken = cookieStore
    .getAll()
    .find((val) => val.name == authVar.refreshToken)?.value;
  if (!accessToken && refreshToken) {
    await refetchToken(refreshToken, accessToken);
    return fetchForClient<T>(config);
  }
  try {
    const response = await axios<T>({
      ...config,
      baseURL: environment.serverURL,
      withCredentials: true,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      },
      timeout: config.timeout || 10000,
    });
    return response.data;
  } catch (error: any) {
    if ([401].includes(error?.status)) {
      await refetchToken(refreshToken, accessToken);
      return fetchForClient<T>(config);
    } else {
      Promise.reject(error);
    }
  }
}

export async function authfetchForServer<T>(config: AxiosRequestConfig) {
  try {
    const response = await axios<T>({
      ...config,
      baseURL: environment.serverURL,
      timeout: config.timeout || 10000,
    });
    return response.data;
  } catch (error: any) {
    console.log(error?.response);
    return Promise.reject(error);
  }
}

export async function refetchToken(
  refreshToken: string | undefined,
  accessToken: string | undefined
) {
  if (!refreshToken || !accessToken) return Promise.reject("");
  try {
    const response = await fetch(
      `${environment.serverURL}api/Authentication/RefreshToken`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: refreshToken,
          token: accessToken,
        }),
      }
    );
    const data = await response.json();
    if (!response.ok) throw data;
    await setCookieForClient({
      [authVar.refreshToken]: data.data.refreshToken,
      [authVar.accessToken]: data.data.accessToken,
    });
    return data;
  } catch {}
  return redirect("/signin");
}
