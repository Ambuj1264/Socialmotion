import NextAuth from "next-auth";
export interface User {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process?.env?.GITHUB_CLIENTID as string,
      clientSecret: process?.env?.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "my-auth",
      credentials: {},
      async authorize(credentials: Record<never, string> | undefined, req: Pick<any, "headers" | "body" | "query" | "method">): Promise<User | null> {
        console.log({email: req?.body?.email,
          password: req?.body?.password}, "req.body");
        try {
          const response = await fetch(`${process.env.BASE_URL}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: req?.body?.email,
              password: req?.body?.password}),
          });
          console.log("response",await response.json());
          if (response.ok) {
            console.log(response, "responseData");
            const responseData = await response.json();
            return responseData.data.login;
          } else {
            throw new Error("Network response was not ok.");
          }
        } catch (error: any) {
          console.log("Error:", error.message);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, user }) {
      if (session) {
        try {
          const response = await fetch("/createUserByProvider", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: session?.user?.email,
              name: session?.user?.name,
              image: session?.user?.image,
            }),
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const resData = await response.json(); // Await parsing JSON response
          console.log(resData, "resData");
        } catch (error: any) {
          console.log("Error saving user data:", error.message);
        }
      }
      return session;
    },

    async jwt({ token }) {
      return token;
    },
  },
});

export { handler as GET, handler as POST };
