import { AxiosRequestConfig } from "axios";
import { authfetchForServer, fetchForClient, fetchForServer } from "../config/axios";

export const authService = {
  refreshToken_client: () =>
    fetchForClient({ url: "api/Authentication/RefreshToken" }),
  refreshToken_server: () =>
    fetchForServer({ url: "api/Authentication/RefreshToken" }),
  signin_client: (conf: AxiosRequestConfig) =>
    authfetchForServer({ url: "api/Authentication/Login", ...conf }),
  signin_server: (conf: AxiosRequestConfig) =>
    authfetchForServer({ url: "api/Authentication/Login", ...conf }),
};
