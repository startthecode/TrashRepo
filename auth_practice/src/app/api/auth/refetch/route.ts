import { setCookieForClient } from "@/app/_utils/cookieForClient";
import { environment } from "@/app/const/environment";
import { authVar } from "@/app/const/globalVar";
import { urls } from "@/app/const/urls";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const returnedURL = searchParams.get("returnedpath") || "/home";
  console.log(returnedURL, "------");
  const baseUrl = request.nextUrl.origin;
  const cookieStore = await cookies();
  let refreshToken = cookieStore.get(authVar.refreshToken);
  let accessToken = cookieStore.get(authVar.accessToken);
  let refetchSuccess = false;
  if (refreshToken) {
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
      console.log(data);
      await setCookieForClient({
        [authVar.refreshToken]: data.data.refreshToken,
        [authVar.accessToken]: data.data.accessToken,
      });
      refetchSuccess = true;
    } catch (err) {}
  }
   const redirectURL = refetchSuccess
    ? new URL(returnedURL, baseUrl).toString()
    : new URL(urls.siginin, baseUrl).toString();

  return NextResponse.redirect(redirectURL);
}
