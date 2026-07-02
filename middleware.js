import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("better-auth.session_token")?.value;
  const { pathname } = request.nextUrl;

  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard && !token) {
    const loginUrl = new URL("/", request.url);
    loginUrl.searchParams.set("message", "Please login to access the dashboard");
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
