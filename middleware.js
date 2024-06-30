import { NextResponse } from "next/server";

export function middleware(request) {
  // Bypass middleware for static files
  if (
    request.nextUrl.pathname.startsWith("/_next/") ||
    request.nextUrl.pathname.startsWith("/static/")
  ) {
    return NextResponse.next();
  }

  let user = request.cookies.get("user")?.value;
  let role;
  if (user) {
    role = JSON.parse(user).role;
  }

  let allowedRoles = ["Manager", "Moderator", "Admin"];

  // Handle redirection for logged-in users
  if (
    request.nextUrl.pathname.startsWith("/login") &&
    allowedRoles.includes(role)
  ) {
    const homeUrl = new URL("/", request.url);
    return NextResponse.redirect(homeUrl);
  }

  // Handle redirection for users not logged in or without the proper role
  if (request.nextUrl.pathname !== "/login" && !allowedRoles.includes(role)) {
    
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Restrict access to /admin-settings to only Admin role
  if (
    request.nextUrl.pathname.startsWith("/admin-settings") &&
    role !== "Admin"
  ) {
    const homeUrl = new URL("/", request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}
