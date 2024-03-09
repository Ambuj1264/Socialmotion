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
      async authorize(
        credentials: Record<never, string> | undefined,
        req: Pick<any, "headers" | "body" | "query" | "method">
      ): Promise<User | null> {
        const url = "http://localhost:5001/graphql";
        const data = {
          input: {
            email: req?.body?.email,
            password: req?.body?.password,
          },
        };

        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: `
                      query Login($input: CreateUserInput) {
                        login(input: $input) {
                          id
                          email
                          password
                          name
                          token
                        }
                      }
                      `,
              variables: data,
            }),
          });

          if (response.ok) {

            console.log(response,"responseData");
            const responseData = await response.json();
            return responseData.data.login;
          } else {
            throw new Error("Network response was not ok.");
          }
        } catch (error) {
          console.error("Error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, user,token }: { session: any; user: User,token:any }) {
        if (session && user && token) {          
            if (!session.user) {
                session.user = {};
            }
            session.user.id = user.id;
        }
        return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
});

export { handler as GET, handler as POST };
