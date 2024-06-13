import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const AUTH_SECRET = process.env.AUTH_SECRET;

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      if (isLoggedIn) return true;

      return false;
      //TODO check logged status with firbase auth aka check the authorization header
    },
  },
  secret: AUTH_SECRET,
  providers: [CredentialsProvider],
} satisfies NextAuthConfig;
