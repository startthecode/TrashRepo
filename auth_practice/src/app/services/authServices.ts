import { AxiosRequestConfig } from "axios";
import {
  authFetchClient,
  authfetchForServer,
  fetchForClient,
  fetchForServer,
} from "../config/axios";
import { config } from "process";

export const authService = {
  refreshToken_client: () =>
    fetchForClient({ url: "api/Authentication/RefreshToken" }),
  refreshToken_server: () =>
    fetchForServer({ url: "api/Authentication/RefreshToken" }),
  signin_client: (conf: AxiosRequestConfig) =>
    authfetchForServer({ url: "api/Authentication/Login", ...conf }),
  signin_server: (conf: AxiosRequestConfig) =>
    authfetchForServer({ url: "api/Authentication/Login", ...conf }),
  signinPractice: (config: AxiosRequestConfig) =>
    authFetchClient({ url: 'api/Authentication/Login', ...config }),
};
