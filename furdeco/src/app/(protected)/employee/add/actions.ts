"use server";

import { employeServices } from "@/app/services/employeeServices";

export async function handleClick(aaa: string) {
  console.log(aaa);
}


export async function employeCode<T>() {
 const response = await employeServices.getEmployeeCode<T>();
 return response;
}
