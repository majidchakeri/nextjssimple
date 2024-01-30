// src/app/admin/page.tsx
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Get the user's token from the cookie
  const cookie = request.cookies.get(process.env.TOKEN as string);
  const token = cookie?.value;

  // Check if the user has the admin role
  const isAdmin = token && token.roles.includes("admin");

  // If not, redirect to the home page
  if (!isAdmin) {
    return NextResponse.redirect("/");
  }

  // Otherwise, continue to the admin page
  return NextResponse.next();
}

export default function AdminPage() {
  return <h1>Welcome, admin!</h1>;
}