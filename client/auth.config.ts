import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      //TODO check logged status with firbase auth aka check the authorization header

      return true;
    },
  },
  providers: [CredentialsProvider],
} satisfies NextAuthConfig;
