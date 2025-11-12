import { AxiosRequestConfig } from "axios";
import { fetchForClient, fetchForServer } from "../config/axios";

export const employeServices = {
  getDashboardData: (userID: string, config?: AxiosRequestConfig) =>
    fetchForServer({
      url: `/api/Employee/EmployeeDashboardDetails?userIdHash=${"WQbA"}`,
      ...config,
    }),
    getEmployeeCode: <T>(config?: AxiosRequestConfig) =>
    fetchForClient<T>({
      url: `/api/Employee/GenerateEmployeeCode`,
      ...config,
    }),
};
