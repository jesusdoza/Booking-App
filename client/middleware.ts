import NextAuth from "next-auth";
import { authConfig } from "./auth-config/auth.config";

//exporting auth property after configuring
export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // '/((?!api|_next/static|_next/image|.*\\.png$).*)'
  matcher: ["/admin"],
};
