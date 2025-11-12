"use server";

import { redirect } from "next/navigation";
import { setCookieForClient } from "../_utils/cookieForClient";
import { authService } from "../services/authServices";
import { authVar } from "../const/globalVar";
import { cookies } from "next/headers";
import { refetchToken } from "../config/axios";

export const login = async (userName: string, password: string) => {
  try {
    let reposponse = await authService.signin_server({
      data: { userName, password },
      method: "POST",
    });
    let { RefreshToken, Token, UserId } = JSON.parse(reposponse.data);

    await setCookieForClient({
      [authVar.refreshToken]: RefreshToken,
      [authVar.accessToken]: Token,
      [authVar.userID]: UserId,
    });
  } catch (err: any) {
    return Promise.reject(err.response?.data?.message || "Something went wrng");
  }
  redirect("/home");
};

export const refrehToken = async () => {
  let cookieStore = await cookies();
  const accessToken = cookieStore
    .getAll()
    .find((val) => val.name === authVar.accessToken)?.value;

  const refreshToken = cookieStore
    .getAll()
    .find((val) => val.name === authVar.refreshToken)?.value;
  try {
    let data = await refetchToken(refreshToken, accessToken);
    return data;
  } catch (err) {
    return false;
  }
};
