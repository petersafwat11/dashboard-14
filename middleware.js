// import { NextResponse } from "next/server";

// export function middleware(request) {
//   // Bypass middleware for static files
//   if (
//     request.nextUrl.pathname.startsWith("/_next/") ||
//     request.nextUrl.pathname.startsWith("/static/")
//   ) {
//     return NextResponse.next();
//   }

//   let user = request.cookies.get("user")?.value;
//   let role;
//   if (user) {
//     role = JSON.parse(user).role;
//   }

//   let allowedRoles = ["Manager", "Moderator", "Admin"];

//   // Handle redirection for logged-in users
//   if (
//     request.nextUrl.pathname.startsWith("/login") &&
//     allowedRoles.includes(role)
//   ) {
//     console.log("already signed in");
//     const homeUrl = new URL("/", request.url);
//     return NextResponse.redirect("/sports");
//   }

//   // Handle redirection for users not logged in or without the proper role
//   if (request.nextUrl.pathname !== "/login" && !allowedRoles.includes(role)) {
//     console.log("not signed in");
//     const loginUrl = new URL("/login", request.url);
//     // loginUrl.searchParams.set("next", request.nextUrl.pathname);
//     return NextResponse.redirect(loginUrl);
//   }

//   // Restrict access to /admin-settings to only Admin role
//   if (
//     request.nextUrl.pathname.startsWith("/admin-settings") &&
//     role !== "Admin"
//   ) {
//     const homeUrl = new URL("/", request.url);
//     return NextResponse.redirect(homeUrl);
//   }

//   return NextResponse.next();
// }
import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone(); // Clone the current URL

  // Bypass middleware for static files and Next.js internal assets
  if (
    request.nextUrl.pathname.startsWith("/_next/") ||
    request.nextUrl.pathname.startsWith("/static/")
  ) {
    return NextResponse.next();
  }

  // Get the user cookie, if exists
  let user = request.cookies.get("user")?.value;

  try {
    user = user && JSON.parse(user);
  } catch (error) {
    console.error("Error parsing user cookie:", error);
    user = null;
  }

  if (request.nextUrl.pathname !== "/login" && !user) {
    console.log("User not signed in. Redirecting to login.");
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (request.nextUrl.pathname.startsWith("/login") && user) {
    console.log("User already signed in. Redirecting to home.");
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
