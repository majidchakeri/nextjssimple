// src/app/admin/page.tsx
import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import jwt from "jsonwebtoken";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function middleware(
  request: NextRequest,
  event: NextFetchEvent
) {
  const role = "admin";
  if (role === "admin") {
    adminMiddleware(request, event);
  }
}
export async function adminMiddleware(
  request: NextRequest,
  event: NextFetchEvent
) {
  // Get the token from the cookie
  const token = request.cookies.get("token");

  console.log("request log token", request);
  console.log("event event log token", event);

  // Decode and verify the token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
  Check the user's role
  const role = "admin";

  // If the user is an admin, render the page with the admin menu component
  if (role === "admin") {
    return NextResponse.rewrite(new URL("/about-2", request.url));
  }

  // Otherwise, redirect to the home page or an error page
  return NextResponse.redirect("/");
}

// A middleware function for user role
export async function userMiddleware(
  request: NextRequest,
  event: NextFetchEvent
) {
  // Get the token from the cookie
  const token = request.cookies.get("token");

  // Decode and verify the token
  // const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Check the user's role
  // const role = decoded.role;

  // If the user is a normal user, render the page with the user menu component
  // if (role === "user") {
  //   return event.render({
  //     page: request.nextUrl.pathname,
  //     props: {
  //       // Pass the menu component as a prop
  //       menu: <UserMenu />,
  //     },
  //   });
  // }

  // Otherwise, redirect to the home page or an error page
  return NextResponse.redirect("/");
}
