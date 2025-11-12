"use server";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { cookies, headers } from "next/headers";
import { environment } from "../const/environment";
import { setCookieForClient } from "../_utils/cookieForClient";
import { authVar } from "../const/globalVar";
import { redirect } from "next/navigation";

// export async function fetchForServer(config: AxiosRequestConfig) {
//   const cookieStore = await cookies();
//   const header = await headers();
//   const returnedpath =
//     header.get("x-invoke-path") ||
//     header.get("x-url") ||
//     header.get("referer") ||
//     "/";
//   const accessToken = cookieStore
//     .getAll()
//     .find((val) => val.name === authVar.accessToken)?.value;

//   const refreshToken = cookieStore
//     .getAll()
//     .find((val) => val.name === authVar.refreshToken)?.value;

//   // 🔹 No accessToken but refreshToken exists → redirect to refresh
//   if (!accessToken && refreshToken) {
//     redirect(`/refresh`);
//   }

//   try {
//     const response = await axios({
//       ...config,
//       baseURL: environment.serverURL,
//       withCredentials: true,
//       headers: {
//         ...config.headers,
//         ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
//       },
//       timeout: config.timeout || 10000,
//     });

//     return response.data;
//   } catch (error: any) {
//     const status = error?.response?.status;

//     if (status === 401) {
//       redirect(`/refresh?redirected=${returnedpath}`);
//     }

//     throw error;
//   }
// }

export async function fetchForServer(config: AxiosRequestConfig) {
  const cookiStore = await cookies();
  let header = await headers();
  const accessToken = cookiStore.get(authVar.accessToken)?.value;
  let currentURL =
    header.get("x-invoke-path") ||
    header.get("x-url") ||
    header.get("referer") ||
    "/";
  if (!accessToken) {
    redirect(`/refresh?redirected=${currentURL}`);
  }

  try {
    let response = await axios({
      ...config,
      baseURL: environment.serverURL,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (err: any) {
    let statusCode = err.response.status;
    if ([401].includes(statusCode)) {
      redirect(`/refresh?redirected=${currentURL}`);
    } else {
      throw err.reponse;
    }
  }
}

export async function fetchForClient(config: AxiosRequestConfig) {
  let cookieStore = await cookies();
  let accessToken = cookieStore
    .getAll()
    .find((val) => val.name == authVar.accessToken)?.value;
  let refreshToken = cookieStore
    .getAll()
    .find((val) => val.name == authVar.refreshToken)?.value;
  if (!accessToken && refreshToken) {
    await refetchToken(refreshToken, accessToken);
    return fetchForClient(config);
  }
  try {
    const response = await axios({
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
      return fetchForClient(config);
    } else {
      Promise.reject(error);
    }
  }
}

export async function authfetchForServer(config: AxiosRequestConfig) {
  try {
    const response = await axios({
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
  refreshToken?: string,
  accessToken?: string
) {
  try {
    let refreshSession = await axios.post(
      `${environment.serverURL}api/Authentication/RefreshToken`,
      JSON.stringify({ refreshToken: refreshToken, token: accessToken }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await setCookieForClient({
      [authVar.refreshToken]: refreshSession.data.refreshToken,
      [authVar.accessToken]: refreshSession.data.accessToken,
    });
    return refreshSession.data;
  } catch (err: any) {
    console.log("--", err.config, "--");
    throw err;
  }
}

export const authFetchClient = async (config: AxiosRequestConfig) => {
  try {
    let response = await axios({ ...config, baseURL: environment.serverURL });
    if (response.data) return response.data;
  } catch (err: any) {
    throw (
      err.response?.data.message ||
      "Unable to login at this moment please try again letter"
    );
  }
};
