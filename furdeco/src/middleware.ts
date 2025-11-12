import { NextRequest, NextResponse } from "next/server";
import { authVar } from "./app/const/globalVar";
import { refetchToken } from "./app/config/axios";
import { redirect } from "next/navigation";

export const middleware = async (req: NextRequest) => {
  let response = NextResponse;
  let accessToken = req.cookies.get(authVar.accessToken);
  let refrehToken = req.cookies.get(authVar.refreshToken);
  const { pathname, search } = req.nextUrl;
  const requestedUrl = pathname + search;

  // Skip Next.js internals and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|woff2?)$/)
  ) {
    return NextResponse.next();
  }
  if ((!accessToken || !refrehToken) && !req.url.includes("signin")) {
    console.log(req.nextUrl.pathname, "----");
    return response.redirect(new URL("/signin", req.url));
  }
  return NextResponse.next();
};
