import NextAuth from "next-auth";
import { authConfig } from "./auth-config/auth.config";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "./auth-config/users";

async function getUser(email: string) {
  return users.find((user) => user.email === email);
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const foundUser = await getUser(email as string);

        if (foundUser && foundUser.password === password) return foundUser;

        return null;

        // try {
        //   const userCredential = await signInWithEmailAndPassword(
        //     auth,
        //     email,
        //     password
        //   );
        //   const token = await userCredential.user.getIdToken();
        //   return { id: userCredential.user.uid, user: userCredential };
        // } catch (error) {
        //   console.log("Error during sign in:", error.message);
        //   return null;
        // }

        return { id: "made one " };
      },
    }),
  ],
});
