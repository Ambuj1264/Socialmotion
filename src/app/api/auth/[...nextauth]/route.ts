// imports
import NextAuth from "next-auth"
export interface User  {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

// importing providers
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
// console.log( process.env.GITHUB_CLIENTID, process.env.GITHUB_CLIENT_SECRET, process.env.GOOGLE_CLIENTID, process.env.GOOGLE_CLIENT_SECRET,"process.env.GOOGLE_CLIENT_SECRET");


const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENTID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENTID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          })
    ],
    pages:{
      signIn:"/login"
    },
    callbacks: {
      async session({ session, user,token }: { session: any; user: User,token:any }) {
          // Check if session exists and has a user property
          if (session && user && token) {
              // Customize user data in the session
              if (!session.user) {
                  session.user = {};
              }
              session.user.id = user.id;
              console.log(token,"token")
          }
          return session;
      },
  },
  
  
      // secret: process.env.NEXTAUTH_SECRET,
      // jwt: {
      //   secret: process.env.NEXTAUTH_SECRET,
      //   maxAge: 60 * 60 * 24 * 30, // Change this to your desired token expiration
      // },
})

export { handler as GET, handler as POST }

 