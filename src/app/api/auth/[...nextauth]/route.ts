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
        const url = process.env.GRAPHQL_URL || "";
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
            console.log(response, "responseData");
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

    async session({ session, user }) {
        if (session) {
      
          try {
            const response = await fetch("http://localhost:5001/createUserByProvider", {
              method: "POST", // Change to POST method
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: session?.user?.email,
                name: session?.user?.name,
                image: session?.user?.image
              }),
            });
      
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
      
            const resData = await response.json(); // Await parsing JSON response
          } catch (error:any) {
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
